import Image from 'next/image';
import React from 'react';

// Define interfaces for the content structure
interface TextNode {
  nodeType: 'text';
  value: string;
  marks?: Mark[];
}

interface Mark {
  type: string;
}

interface ContentNode {
  nodeType: string;
  content: Array<ContentNode | TextNode>;
  data?: any;
}

interface RichText {
  data: {};
  content: ContentNode[];
  nodeType: 'document';
}

interface ArticleRendererProps {
  articleContent: RichText;
}

// A function to render text nodes with marks, if applicable
const renderText = (node: TextNode): JSX.Element => {
  if (node.marks && node.marks.length > 0) {
    let textElement: JSX.Element = <span>{node.value}</span>;
    node.marks.forEach(mark => {
      switch (mark.type) {
        case 'bold':
          textElement = <strong>{textElement}</strong>;
          break;
        case 'italic':
          textElement = <em>{textElement}</em>;
          break;
        // Handle other mark types here
        default:
          break;
      }
    });
    return textElement;
  } else {
    return <>{node.value}</>;
  }
};

const ArticleRenderer: React.FC<ArticleRendererProps> = ({ articleContent }) => {
  const renderContentNode = (node: ContentNode | TextNode): JSX.Element | null => {
    switch (node.nodeType) {
      case 'paragraph':
        return (
          <p>
            {node.content.map((subNode, index) => <React.Fragment key={index}>{renderContentNode(subNode)}</React.Fragment>)}
          </p>
        );
      case 'embedded-asset-block':
        return (
          <Image src={node.data.target.fields.file.url} alt={node.data.target.fields.title} />
        );
      case 'text':
        return renderText(node as TextNode);
      default:
        return null;
    }
  };

  return (
    <div>
      {articleContent.content.map((node, index) => <React.Fragment key={index}>{renderContentNode(node)}</React.Fragment>)}
    </div>
  );
};

export default ArticleRenderer;



// import { getAsset } from '@/contentful';
// import Image from 'next/image';
// import React, { ReactNode, useEffect, useState } from 'react';

// interface ContentNode {
//     data: any;
//     marks?: any[];
//     value?: string;
//     content?: ContentNode[];
//     nodeType: string;
//   }
  
//   interface ArticleContent {
//     data: any;
//     content: ContentNode[];
//     nodeType: string;
//   }
  
//   interface ArticleRendererProps {
//     articleContent: ArticleContent;
//   }

// const ArticleRenderer: React.FC<ArticleRendererProps> = ({ articleContent }) => {
//   const renderNode = (node: ContentNode): ReactNode => {
//     switch (node.nodeType) {
//       case 'paragraph':
//         return (
//           <p key={uniqueKey()}>
//             {node.content?.map((contentNode) => renderNode(contentNode))}
//           </p>
//         );

//       case 'text':
//         return <span key={uniqueKey()}>{node.value}</span>;

//       case 'embedded-asset-block':
//         return <EmbeddedAsset id={node.data.target.sys.id} key={uniqueKey()} />;

//       default:
//         return null;
//     }
//   };

//   // Generate unique keys for React list rendering
//   const uniqueKey = () => Math.random().toString(36).substr(2, 9);

//   return (
//     <div>
//       {articleContent.content.map((node) => renderNode(node))}
//     </div>
//   );
// };

// const EmbeddedAsset: React.FC<{ id: string }> = ({ id }) => {
//   const [imageUrl, setImageUrl] = useState<string>('');
//   const [imageAlt, setImageAlt] = useState<string>('');

//   useEffect(() => {
//     getAsset(id).then((data) => {
//       setImageUrl(data.url);
//       setImageAlt(data.description);
//     });
//   }, [id]);

//   return imageUrl ? <Image
//   src={imageUrl}
//   alt={imageAlt}
//   sizes="100vw"
//   style={{
//     width: '100%',
//     height: 'auto',
//   }}
//   width={500}
//   height={300}
// /> : null;
// };

// export default ArticleRenderer;

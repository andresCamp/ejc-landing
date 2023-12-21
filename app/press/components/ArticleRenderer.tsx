import { getAsset } from '@/contentful';
import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';

interface ContentNode {
    data: any;
    marks?: any[];
    value?: string;
    content?: ContentNode[];
    nodeType: string;
  }
  
  interface ArticleContent {
    data: any;
    content: ContentNode[];
    nodeType: string;
  }
  
  interface ArticleRendererProps {
    articleContent: ArticleContent;
  }

const ArticleRenderer: React.FC<ArticleRendererProps> = ({ articleContent }) => {
  const renderNode = (node: ContentNode): ReactNode => {
    switch (node.nodeType) {
      case 'paragraph':
        return (
          <p key={uniqueKey()}>
            {node.content?.map((contentNode) => renderNode(contentNode))}
          </p>
        );

      case 'text':
        return <span key={uniqueKey()}>{node.value}</span>;

      case 'embedded-asset-block':
        return <EmbeddedAsset id={node.data.target.sys.id} key={uniqueKey()} />;

      default:
        return null;
    }
  };

  // Generate unique keys for React list rendering
  const uniqueKey = () => Math.random().toString(36).substr(2, 9);

  return (
    <div>
      {articleContent.content.map((node) => renderNode(node))}
    </div>
  );
};

const EmbeddedAsset: React.FC<{ id: string }> = ({ id }) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageAlt, setImageAlt] = useState<string>('');

  useEffect(() => {
    getAsset(id).then((data) => {
      setImageUrl(data.url);
      setImageAlt(data.description);
    });
  }, [id]);

  return imageUrl ? <Image
  src={imageUrl}
  alt={imageAlt}
  sizes="100vw"
  style={{
    width: '100%',
    height: 'auto',
  }}
  width={500}
  height={300}
/> : null;
};

export default ArticleRenderer;

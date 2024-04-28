import React from 'react';
import Image from 'next/image';
import styles from './topicBox.module.scss'; 

interface TopicBoxProps {
  img: string; // Image URL (assuming `Image` is handled elsewhere)
  text: string;
}

const TopicBox: React.FC<TopicBoxProps> = ({ img, text }) => {
  return (
    <div className={styles.TOPICBOX}>
      <div className={styles.Box}>
        <div className={styles.logoTopic}>
          <Image src={img}  alt={''} />
        </div>
        <div className={styles.textTopic}>{text}</div>
      </div>
    </div>
  );
};

export default TopicBox;
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import './index.less';
import '../../style/index.less';
import Message from 'Components/Message';
import WebRecord from '../../helper/record';

const Home = () => {
  const [cardList, setCardList] = useState<number[]>([1]);
  const [isRecording, setIsRecording] = useState(false);
  const [colorCache] = useState<{ [key: number]: string }>({});
  const pageRecord = useRef<WebRecord>(new WebRecord()).current;
  const history = useHistory();

  //开始|结束 录制
  const handleStartRecord = () => {
    if (isRecording) {
      setIsRecording(false);
      pageRecord.end();
      Message('end record!', 'success');
    } else {
      setIsRecording(true);
      pageRecord.start();
      Message('start record!', 'success');
    }
  };

  //去回放页面
  const goReplayRecordPage = () => {
    history.push('/replay');
  };

  //添加卡片
  const handleAddCard = () => {
    setCardList([...cardList, cardList.length + 1]);
  };

  //获取随机颜色
  const getRandomColor = (id: number) => {
    const oldColor = colorCache[id];
    if (oldColor) {
      return oldColor;
    }
    const newColor = `#${Math.random().toString(16).slice(-6)}`;
    colorCache[id] = newColor;
    return newColor;
  };

  //重置卡片
  const handleResetCard = () => {
    setCardList([1]);
  };

  return (
    <div className="home-page">
      <header className='font-size-32 text-center mt-24'>web record</header>
      <section className='box-cont'>
        <div className='flex-center top-handle mt-24 pb-16'>
          <button className='theme-btn' onClick={handleStartRecord}>
            {isRecording ? 'End' : 'Start'} Record
          </button>
          <button className='btn ml-64' onClick={goReplayRecordPage}>
            Go Replay Record
          </button>
        </div>

        <div className="flex-center mt-48">
          <input type="text" className="h-input" placeholder="Say something?" />
        </div>

        <div className='flex'>
          <button className='theme-btn ml-16' onClick={handleAddCard}>
            Add Card
          </button>
          <button className='theme-btn ml-16' onClick={handleResetCard}>
            Reset Card
          </button>
        </div>

        <ul className='mt-12 flex flex-wrap card-cont'>
          {cardList.map((it) => (
            <li
              className='flex-center card-item'
              style={{ backgroundColor: getRandomColor(it) }}
              key={it}>
              {it}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;

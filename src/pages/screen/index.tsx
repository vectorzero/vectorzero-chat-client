import React, { useState } from 'react'
import styles from "./index.module.less"

const ScreenPage: React.FC = () => {
  const [configObj, setConfigObj] = useState<string, unknown>({ systemTitle: '' })
  const [formatTime, setFormatTime] = useState<string>('')
  const [rankData, setRankData] = useState<array>([])
  const [typeList, setTypeList] = useState<array>([])
  const [deptList, setDeptList] = useState<array>([])
  const [isBlink, setBlink] = useState<boolean>(false)
  const [isStartTime, setStartTime] = useState<boolean>(false)
  const [sectionIndex, setSectionIndex] = useState<number>(0)
  const [deptIndex, setDeptIndex] = useState<number>(0)

  return (
    <>
      <div className={styles['screen-wrap']}>
        <div className={styles['top-wrap']}>
          {configObj.systemTitle}
          <i title="抽取答题人员"></i>
        </div>
        <div className={styles['mid-wrap']}>
          <div className={styles['count-wrap']} >
            <div className={styles['rank-title']} >
              排行榜
            </div>
            {rankData.map((item, index) => (
              <div className={styles['count-item']} key={index}>
                <div className={styles['name-wrap']}>
                  <div className={styles.nameI}>
                    <img
                      className={styles['rank-img']}
                      src="../../assets/rank.png"
                    />
                    <span className={styles['rank-sort']}>
                      {item.ranking}
                    </span>
                    <span>{item.subGroup}</span>
                  </div>
                  <div className={styles.progress}>
                    {item.percentage}
                  </div>
                  <div className={styles['rank-grade']}>
                    {item.grade >= 0 ? '' : '-'}
                    {item._grade}分
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles['question-wrap']}>
            <div className={styles['timer-img']}>
              <label htmlFor="modal-1">
                <div className={styles['timer-wrap']}>
                  <img
                    className={[styles['time-clock'], isBlink ? styles['active-time'] : '']}
                    src="../../assets/timer.png"
                  />
                  <span className={styles['time-text']}>{formatTime}</span>
                  <img
                    className={styles['time-ico']}
                    src={isStartTime ? '../../assets/stop.png' : '../../assets/start.png'}
                  />
                </div>
              </label>
            </div>
            {typeList.length > 1 &&
              <div className={styles['type-wrap']}>
                {typeList.map((item, index) => {
                  <div key={index} className={[styles['type-item'], index === sectionIndex ? styles['active'] : '']}>{item}</div>
                })}
              </div>
            }
            <div className={typeList.length > 1 ? styles['dept-wrap'] : styles['type-wrap']}>
              {deptList.map((item, index) => {
                <div key={index} className={typeList.length > 1 ? styles['dept-item'] : styles['type-item'], index === deptIndex ? styles['active'] : ''}>{item}</div>
              })}
            </div>
            <div className={styles['pro-wrap']}>
              <div
                className={styles['pro-item']}
              >
                {k}
              </div>
            </div >
            <div className={styles['black-wrap']}>
              <div className={styles['init-data']}></div>
              <div
                className={styles['question-content']}
              >
                <div style={{ display: flex, "justify-content": "space-between" }}>
                  <div
                    className={styles['btn-style']}
                    style={{ "margin-right": "10px" }}
                  >
                    {isShowTitle ? '题目' : '显示题目'}
                  </div>
                  <div className={styles['btn-style']}>
                    <img
                      title="查看图片"
                      style={{ width: "30px", height: "30px", border: "2px solid #fff" }}
                      src={currentPromise.image_url}
                    >
                    </img>
                    <img
                      title="查看视频"
                      style={{ width: "30px", height: "30px", "margin-left": "20px" }}
                      src="../../assets/video.png"
                    />
                  </div>
                </div >
                {/* <pre className={styles.['special-font'] styles['title-content'] styles['pre-div']}>{currentPromise.content}</pre> */}
                <div className={styles['btn-style']}>
                  <div>{isShowAnswer ? '答案：' : '显示答案'}</div>
                  <div style={{ display: "flex" }}>
                    <div className={styles['icon-wrap']}>
                      <img className={styles['sign-img']} src="../../assets/error.png" />
                    </div>
                    <div className={styles['icon-wrap']}>
                      <img className={styles['sign-img']} src="../../assets/right.png" />
                    </div>
                  </div>
                </div>
                {/* <pre className={styles['text-class'] styles['answer-content'] styles['special-font'] styles['pre-div']}>{currentPromise.answer}</pre> */}
              </div>
              <div className={styles['point-wrap']}>
                <div className={styles['btn-style']}>{isShowPrev ? '上一题' : ''}</div>
                <div className={styles['btn-style']}>{isShowNext ? '下一题' : ''}</div>
              </div>
            </div>
            <div className={styles['bot-wrap']}>
              <div>
                Copyright © 2021 All Rights Reserved.顺丰速运事业群客户科技处版权所有
              </div>
              <div>{version}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScreenPage

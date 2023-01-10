import * as S from './app.styles';
import { ChangeEvent, useState } from 'react';
import { CloseOutlined, LoadingOutlined } from '@ant-design/icons';
import AllocationPage from './components/units/allocation/allocation';
import { DatePicker, Space } from 'antd';
import PeriodPage from './components/units/distribution/period';
import DualMomentumPage from './components/units/distribution/dualMomentum';
import VaaPage from './components/units/distribution/vaa';
import DaaPage from './components/units/distribution/daa';

function App() {
  const [tab, setTab] = useState(0);
  const [monthTab, setMonthTab] = useState(0);
  const [banner, setBanner] = useState(false);
  const [strategy, setStrategy] = useState('');
  const [backTest, setBackTest] = useState('백테스트');
  const [isLoading, setIsLoading] = useState(false);
  const [isGraph, setIsGraph] = useState(false);
  const [graph, setGraph] = useState(0);
  const vaaDefenseArray = ['01', '02', '03'];
  const dual = ['01', '02'];

  const dualArray = [
    'SPY',
    'EFA',
    'QQQ',
    'KOSPI',
    'KOSDAQ',
    'GLD',
    'VNQ',
    'TLT',
    'AGG',
    'VEA',
  ];

  const defenseArray = ['AGG', 'LQD', 'SHY', 'IEF'];
  const kanariaArray = [
    'SPY',
    'IWM',
    'QQQ',
    'VGK',
    'EWJ',
    'VWO',
    'VNQ',
    'GSG',
    'GLD',
    'TLT',
    'HYG',
    'LQD',
    'AGG',
    'VEA',
    'KOSPI',
    'KOSDAQ',
    'SHY',
    'IEF',
    'UST',
    'BND',
  ];
  const { RangePicker } = DatePicker;

  const onClickBanner = () => setBanner((prev) => !prev);

  const onClickTab = (event: any) => {
    setTab(Number(event?.currentTarget.id));
  };

  const onClickMonthTab = (event: any) => {
    setMonthTab(Number(event?.currentTarget.id));
  };

  const onChangeStrategy = (event: ChangeEvent<HTMLInputElement>) => {
    setStrategy(event.target.value);
  };

  const onClickBtn = () => {
    setIsLoading(true);
    setBackTest('대기중... ');
    setTimeout(() => {
      setIsLoading(false);
      setBackTest('');
      setIsGraph(true);
      setGraph(100);
    }, 2000);
    setTimeout(() => {
      setIsGraph(false);
      setBackTest('생성중... ');
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setGraph(0);
        setBackTest('백테스트');
      }, 1200);
    }, 3500);
  };

  return (
    <>
      <S.Fixed>
        {!banner && (
          <S.Banner>
            <S.BannerWrapper>
              <p>베타테스터 분들께 드리는 감사 & 얼리버드 이벤트!</p>
              <CloseOutlined onClick={onClickBanner} />
            </S.BannerWrapper>
          </S.Banner>
        )}

        <S.Header>
          <S.Wrapper>
            <section>
              <img src='/icon_logo.png' alt='로고 아이콘' />
              <S.MyInfo>
                <li>신미연님 환영합니다!</li>
                <li>마이페이지</li>
                <li>100%</li>
              </S.MyInfo>
            </section>
          </S.Wrapper>
        </S.Header>

        <S.Nav>
          <S.Wrapper>
            <S.NavList>
              <li>백테스트</li>
              <li>자산배분</li>
              <li>포트폴리오 추출</li>
              <li>팩터 검증</li>
              <li className='dot'>전략 조회</li>
              <li>커뮤니티</li>
            </S.NavList>
          </S.Wrapper>
        </S.Nav>
      </S.Fixed>

      <S.Strategy>
        <input
          type='text'
          placeholder='전략 이름을 입력해주세요'
          onChange={onChangeStrategy}
        />
        <S.StrategyBtn strategy={strategy}>전략 저장</S.StrategyBtn>
      </S.Strategy>

      <S.Wrapper>
        <S.Allocation>
          <AllocationPage onClickTab={onClickTab} tab={tab} />
          {tab === 0 && (
            <PeriodPage monthTab={monthTab} onClickMonthTab={onClickMonthTab} />
          )}
        </S.Allocation>

        {tab === 1 && (
          <DualMomentumPage
            monthTab={monthTab}
            dualArray={dualArray}
            defenseArray={defenseArray}
            onClickMonthTab={onClickMonthTab}
            dual={dual}
          />
        )}
        {tab === 2 && (
          <VaaPage
            defenseArray={defenseArray}
            dualArray={dualArray}
            vaaDefenseArray={vaaDefenseArray}
          />
        )}
        {tab === 3 && (
          <DaaPage
            dualArray={dualArray}
            defenseArray={defenseArray}
            kanariaArray={kanariaArray}
            vaaDefenseArray={vaaDefenseArray}
            dual={dual}
          />
        )}

        <S.Date>
          <ul>
            <li>시작일 설정</li>
            <li>종료일 설정</li>
          </ul>
          <Space direction='vertical' size={12}>
            <RangePicker />
          </Space>
        </S.Date>

        {!isGraph && (
          <S.Test type='submit' onClick={onClickBtn}>
            {backTest} {isLoading ? <LoadingOutlined /> : null}
          </S.Test>
        )}

        {isGraph && (
          <S.TestOnLoading>
            <S.GraphPercent graph={graph}></S.GraphPercent>
          </S.TestOnLoading>
        )}
      </S.Wrapper>
      <S.Footer>
        <ul>
          <li>© 2022 Quantus. All rights reserved.</li>
          <li>
            <a href='https://cafe.naver.com/quantus' rel='noopener noreferrer'>
              네이버 카페 바로가기
            </a>
          </li>
          <li>문의: info@quantus.kr</li>
          <li>
            <a
              href='https://opposite-theater-c57.notion.site/d8d210030a2d47eba7c4fae775375a03'
              rel='noopener noreferrer'
            >
              이용약관
            </a>
          </li>
        </ul>
      </S.Footer>
    </>
  );
}

export default App;

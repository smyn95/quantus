import * as S from './app.styles';
import { ChangeEvent, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import AllocationPage from './components/units/allocation/allocation';
import DualPage from './components/units/dual';

function App() {
  const [tab, setTab] = useState(0);
  const [tab2, setTab2] = useState(0);
  const [banner, setBanner] = useState(false);
  const [strategy, setStrategy] = useState('');
  const [aniMode, setAniMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const btnArray = [
    '월별',
    '분기별',
    '반기별',
    '매년',
    '하지 않음 (Buy-and-Hold)',
  ];

  const onClickBanner = () => setBanner((prev) => !prev);

  const onClickTab2 = (event: any) => {
    setTab2(Number(event?.currentTarget.id));
  };

  const onClickOpenModal = () => {
    setIsOpen(true);
    setAniMode((prev) => !prev);
  };

  const onChangeStrategy = (event: ChangeEvent<HTMLInputElement>) => {
    setStrategy(event.target.value);
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

      <S.Wrapper>
        <S.Strategy>
          <input
            type='text'
            placeholder='전략 이름을 입력해주세요'
            onChange={onChangeStrategy}
          />
          <S.StrategyBtn strategy={strategy}>전략 저장</S.StrategyBtn>
        </S.Strategy>

        <S.Allocation>
          <AllocationPage setTab={setTab} tab={tab} />
          {tab === 0 ? (
            <>
              <S.AllocationMenu aniMode={aniMode}>
                <li>주기 리밸런싱</li>
                <li onClick={onClickOpenModal}>
                  {btnArray[tab2]}
                  <S.AllocationList tab={tab2} aniMode={aniMode}>
                    {btnArray.map((el: any, i: number) => (
                      <li id={String(i)} key={i} onClick={onClickTab2}>
                        {el}
                      </li>
                    ))}
                  </S.AllocationList>
                </li>
              </S.AllocationMenu>

              <S.Balance>
                <li>밴드 리밸런싱</li>
                <li>
                  <input
                    type='number'
                    placeholder='리밸런싱 밴드 기준을 입력해주세요'
                  />
                </li>
              </S.Balance>
              <S.Span>
                0~100%까지 입력할 수 있습니다. (0 입력시 비활성화)
              </S.Span>
            </>
          ) : (
            <DualPage />
          )}
        </S.Allocation>
        <S.Add>
          <h1>자산군 추가</h1>
          <button>추가하기</button>
        </S.Add>

        <S.Test type='submit'>백테스트</S.Test>
      </S.Wrapper>
    </>
  );
}

export default App;

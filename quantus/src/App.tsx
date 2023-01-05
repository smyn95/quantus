import * as S from './app.styles';
import { ChangeEvent, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';

function App() {
  const [tab, setTab] = useState(0);
  const [banner, setBanner] = useState(false);
  const [strategy, setStrategy] = useState('');
  const [aniMode, setAniMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const btnArray = ['전략배분 (정적자산배분)', '듀얼모멘텀', 'VAA', 'DAA'];

  console.log(aniMode);

  const onClickBanner = () => {
    setBanner((prev) => !prev);
  };

  const onClickTab = (event: any) => {
    setTab(Number(event?.currentTarget.id));
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
          <h1>자산배분 설정</h1>
          <S.AllocationMenu aniMode={aniMode}>
            <li>자산배분 알고리즘</li>
            <li onClick={onClickOpenModal}>
              {btnArray[tab]}
              <S.AllocationList tab={tab} aniMode={aniMode}>
                {btnArray.map((el: any, i: number) => (
                  <li id={String(i)} key={i} onClick={onClickTab}>
                    {el}
                  </li>
                ))}
              </S.AllocationList>
            </li>
          </S.AllocationMenu>

          <S.AllocationMonth aniMode={aniMode}>
            <li>주기 리밸런싱</li>
            <li>월별</li>
          </S.AllocationMonth>

          <ul>
            <li>밴드 리밸런싱</li>
            <li>
              <input
                type='number'
                placeholder='리밸런싱 밴드 기준을 입력해주세요'
              />
            </li>
          </ul>
          <span>0~100%까지 입력할 수 있습니다. (0 입력시 비활성화)</span>
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

import ScreenContainer from '@/components/ui/screen-container'

const ServerPage = async () => {
  return (
    <ScreenContainer>
      <section className="mx-auto flex w-full max-w-7xl flex-col px-2 py-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          노벨덕 이용약관
        </h2>
        <article>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              1. 약관
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              본 웹사이트에 액세스함으로써 귀하는 본 웹사이트 이용약관, 모든
              관련 법률 및 규정을 준수할 것에 동의하며, 해당 지역 법률을 준수할
              책임이 귀하에게 있음에 동의하는 것입니다. 본 약관에 동의하지 않는
              경우 본 사이트를 사용하거나 접속할 수 없습니다. 본 웹사이트에
              포함된 자료는 관련 저작권 및 상표법의 보호를 받습니다.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              2. 사용 허가
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              개인적이고 비상업적인 일시적인 열람을 위해서만 노벨덕에서
              자료(정보 또는 소프트웨어)의 사본 1부를 일시적으로 다운로드할 수
              있는 권한이 부여됩니다. 이는 소유권 양도가 아닌 라이선스 부여이며,
              이 라이선스에 따라 귀하는 다음을 수행할 수 없습니다: 자료를
              수정하거나 복사할 수 없습니다; 자료를 상업적 목적 또는 공공
              전시(상업적 또는 비상업적)에 사용할 수 없습니다; 노벨덕 웹사이트에
              포함된 소프트웨어를 디컴파일하거나 리버스 엔지니어링을 시도하는
              행위; 자료에서 저작권 또는 기타 소유권 표기를 제거하는 행위; 또는
              자료를 다른 사람에게 양도하거나 다른 서버에 자료를 미러링하는
              행위. 귀하가 이러한 제한 사항을 위반하는 경우 본 라이선스는
              자동으로 종료되며, 노벨덕는 언제든지 라이선스를 해지할 수
              있습니다. 이러한 자료의 열람을 종료하거나 본 라이선스가 종료되면
              귀하는 전자 또는 인쇄 형식에 관계없이 소지하고 있는 다운로드한
              자료를 모두 파기해야 합니다.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              3. 면책 조항
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              노벨덕 웹사이트의 자료는 있는 그대로 제공됩니다. 노벨덕는
              명시적이든 묵시적이든 어떠한 보증도 하지 않으며, 이에 따라 상품성,
              특정 목적에의 적합성, 지적 재산권의 비침해 또는 기타 권리 침해에
              대한 묵시적 보증 또는 조건을 포함하되 이에 국한되지 않는 기타 모든
              보증을 부인하고 무효화합니다. 또한, 노벨덕은 인터넷 웹 사이트 또는
              그러한 자료 또는 이 사이트에 링크된 사이트와 관련된 자료 사용의
              정확성, 예상 결과 또는 신뢰성에 대해 어떠한 보증이나 진술도 하지
              않습니다.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              4. 제한 사항
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              노벨덕 또는 그 공급업체는 어떠한 경우에도 노벨덕 또는 노벨덕의
              공인 대리인이 그러한 손해의 가능성을 구두 또는 서면으로 통지받은
              경우에도 노벨덕 인터넷 사이트의 자료 사용 또는 사용 불능으로 인해
              발생하는 손해(데이터 또는 이익 손실 또는 업무 중단으로 인한 손해를
              포함하되 이에 국한되지 않음)에 대해 책임지지 않습니다. 일부
              관할권에서는 묵시적 보증에 대한 제한 또는 결과적 또는 부수적
              손해에 대한 책임의 제한을 허용하지 않기 때문에 이러한 제한이
              귀하에게 적용되지 않을 수 있습니다.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              5. 개정 및 오류
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              노벨덕 웹사이트에 게재된 자료에는 기술적, 인쇄상의 또는 사진상의
              오류가 있을 수 있습니다. 노벨덕는 웹 사이트의 자료가 정확하거나
              완전하거나 최신임을 보증하지 않습니다. 노벨덕은 웹 사이트에 포함된
              자료를 사전 통지 없이 언제든지 변경할 수 있습니다. 그러나 노벨덕은
              자료 업데이트에 대한 어떠한 약속도 하지 않습니다.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              6. 링크
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              노벨덕은 인터넷 웹사이트에 링크된 모든 사이트를 검토하지 않았으며,
              링크된 사이트의 내용에 대해 책임을 지지 않습니다. 링크가 포함되어
              있다고해서 노벨덕이 해당 사이트를 보증한다는 의미는 아닙니다.
              이러한 링크된 웹사이트의 사용은 전적으로 사용자의 책임입니다.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              7. 사이트 이용 약관 수정
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              노벨덕은 언제든지 통지 없이 본 웹사이트 이용 약관을 개정할 수
              있습니다. 본 웹사이트를 이용함으로써 귀하는 본 이용약관의 최신
              버전에 동의하는 것으로 간주됩니다.
            </p>
          </div>
        </article>
      </section>
    </ScreenContainer>
  )
}

export default ServerPage

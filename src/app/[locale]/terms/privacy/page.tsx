import ScreenContainer from '@/components/ui/screen-container'

const ServerPage = async () => {
  return (
    <ScreenContainer>
      <section className="mx-auto flex w-full max-w-7xl flex-col px-2 py-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          노벨덕 개인정보 처리방침
        </h2>
        <article>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              1. 소개
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              본 개인정보 보호정책(이하 개인정보 보호정책)은 노벨덕
              유한회사(이하 노벨덕, 당사 또는 우리)가 귀하에 관한 정보를 수집,
              사용 및 공유하는 방법을 설명하며, 본 개인정보 보호정책은 귀하가
              당사의 (모바일/온라인) 소설 플랫폼(플랫폼), 콘텐츠 및 노벨덕
              관련된 모든 서비스(이하 통칭하여 서비스)를 사용하는 데 적용됩니다.
              본 개인정보 처리방침에는 당사의 서비스 약관이 적용됩니다. 당사의
              서비스에 액세스하고 이용함으로써 귀하는 본 개인정보 처리방침에
              동의하는 것으로 간주됩니다. 서비스를 이용하기 전에 잠시 시간을
              내어 본 개인정보 처리방침을 읽어주시기 바랍니다. 본 개인정보
              처리방침에 동의하지 않는 경우, 즉시 당사 서비스에 대한 액세스 또는
              사용을 중단해야 합니다.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              2. 당사는 귀하로부터 정보를 어떻게 얻나요?
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              당사와 당사의 서비스 제공자(아래에 정의됨)는 서비스를 통해 귀하의
              정보를 직접 수집할 수 있습니다. 예를 들어, 당사는 귀하가 다음과
              같은 활동을 수행할 때 정보를 수집합니다(수집하는 개인정보 및
              개인정보 수집 방법은 서비스가 제공되는 국가에 따라 약간씩 다를 수
              있습니다).
            </p>
            <ul className="my-6 ml-6 list-disc text-muted-foreground [&>li]:mt-2">
              <li>플랫폼에서 계정 생성</li>
              <li>
                귀하의 기존 노벨덕 계정을 Google, Kakao 등 소셜 네트워크
                서비스(“SNS”)에 등록하거나 연결
              </li>
              <li>당사 서비스 이용</li>
              <li>
                서비스를 통해 당사가 주최하는 모든 유형의 이벤트에 참여하는 경우
              </li>
              <li>
                서비스를 통해 당사가 주최하는 모든 유형의 설문조사에 참여하는
                경우
              </li>
              <li>
                플랫폼을 통한 구매, 또는 당사가 제공하는 방법을 통해 당사에
                연락하는 경우
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              3. 개인정보란 무엇인가요?
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              개인정보는 회원님을 식별하거나 회원님과 관련되거나 회원님과
              합리적으로 연결될 수 있는 모든 정보를 의미합니다.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              4. 어떤 개인정보를 수집하나요?
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              a. 당사는 귀하가 당사 서비스에 액세스하거나 사용할 때 귀하에 관한
              특정 정보(“사용 정보”)를 자동으로 수집할 수 있습니다. 사용
              정보에는 운영 체제(OS), 장치 모델, 국가 정보, 브라우저 정보, IP
              주소 및 귀하의 서비스 사용에 관한 기타 정보가 포함될 수 있습니다.
              사용 정보를 수집하기 위해 서비스에서 사용할 수 있는 방법은 다음과
              같습니다.
            </p>
            <ul className="my-6 ml-6 list-disc text-muted-foreground [&>li]:mt-2">
              <li>자동으로 수집되는 로그 정보</li>
              <p className="mt-2">
                로그 파일에 저장되는 서비스 사용에 관한 데이터
              </p>
              <li>인앱 추적</li>
              <p className="mt-2">
                당사 플랫폼과 제3자 플랫폼에는 다양한 추적 방법이 포함될 수
                있습니다. 이는 쿠키와 같은 브라우저 기반이 아니며 브라우저
                설정으로 제어할 수 없습니다. 일부는 기기 식별자 또는 광고 ID와
                같은 기타 식별자를 사용하여 앱 사용자 활동을 특정 앱에 연결하고
                앱 전체에서 사용자 활동을 추적합니다.
              </p>
              <li>쿠키</li>
              <p className="mt-2">
                당사는 접속 빈도나 방문 시간 등을 분석하여 관심분야와 취향을
                파악하여 게스트 이용자를 포함한 이용자에게 맞춤형 서비스를
                제공하기 위해 쿠키를 사용할 수 있습니다. 브라우저 설정에서
                쿠키를 비활성화할 수 있지만, 그렇게 하면 서비스의 일부가 제대로
                작동하지 않을 수 있습니다.
              </p>
            </ul>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              b. 당사는 서비스 제공업체 및 제3자 서비스를 포함한 다른
              소스(법률이 허용하는 경우)로부터 귀하에 대한 정보를 얻을 수 있으며
              해당 정보를 귀하로부터 직접 및/또는 자동으로 수집한 정보와 결합할
              수 있습니다. 귀하가 기존 계정을 제3자 서비스 제공업체(예: Apple)
              또는 SNS(예: Kakao, Google)의 계정에 등록하거나 연결할 때 다음
              정보가 당사로 전송됩니다.
            </p>
            <ul className="my-6 ml-6 list-disc text-muted-foreground [&>li]:mt-2">
              <li>제3자 서비스 제공업체 또는 SNS의 이름</li>
              <li>사용자 ID 및 이메일 주소</li>
            </ul>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              c. 일단 비식별화된 개인정보는 본 개인정보 보호정책의 적용을 받지
              않으며, 당사와 당사의 지원 회사(아래에 정의됨)는 이를 비개인
              정보로 취급하고 해당 법률에서 금지하는 경우를 제외하고 귀하에 대한
              의무 없이 사용할 수 있습니다.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              5. 개인정보는 어떻게 처리되나요?
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              당사는 다음과 같은 목적으로 귀하의 정보를 수집, 사용, 처리, 공유
              및/또는 공개합니다.
            </p>
            <ul className="my-6 ml-6 list-disc text-muted-foreground [&>li]:mt-2">
              <li>
                <b>귀하와의 계약 관계에 따라 서비스를 제공하기 위해</b>
              </li>
              <li>플랫폼 및 서비스를 제공, 운영 및 유지하기 위해</li>
              <li>
                귀하의 노벨덕 계정을 포함한 회원 서비스에 대한 사용자 식별을
                확인, 운영 및 처리합니다.
              </li>
              <li>구매, 거래 및 환불을 확인, 운영 및 처리합니다.</li>
              <li>
                귀하 또는 귀하의 장치가 당사 서비스에 등록하도록 돕기 위해
              </li>
              <li>당사 플랫폼을 운영하고 귀하의 활동을 분석하기 위해</li>
              <li>맞춤형 서비스를 제공하기 위해</li>
              <li>프로모션 및 이벤트 활동 제안 및 운영</li>
              <li>문제를 해결하기 위해</li>
              <li>서비스 성능 품질을 개선하기 위해 모니터링하고 분석</li>
              <li>보안의 기밀성, 무결성 및 가용성을 향상</li>
              <li>더 나은 서비스를 위한 운영 환경을 개발하고 개선</li>
              <li>
                귀하가 귀하의 노벨덕 계정을 관리할 수 있도록 하기 위해 및/또는
                서비스 제공에 필요한 기타 활동을 수행하기 위해
              </li>
              <li>
                <b>
                  서비스 약관, 개인정보 보호정책(관련 부록 포함) 및 제3자와의
                  기타 계약을 시행하기 위해
                </b>
              </li>
              <li>
                위반, 서비스의 무단 사용 및/또는 남용, 기타 계약 및/또는
                의심되는 불법 활동을 탐지, 예방, 조사 및 보고
              </li>
              <li>
                귀하와 관련된 모든 문제 및 청구를 해결하기 위해(문서 수집/검토,
                법적 조언 제공, 분쟁 해결 진행 등을 포함하되 이에 국한되지 않음)
              </li>
              <li>
                당사와 서비스 제공업체의 권리, 개인 정보 보호, 안전 및 재산을
                보호
              </li>
              <li>다른 정책 및 계약을 시행하기 위해</li>
              <li>
                <b>법적 요구 사항을 준수하려면</b>
              </li>
              <li>
                당사에 구속력을 갖는 법적 또는 규제 당국이 확립한 해당 규칙,
                법률, 규정 및/또는 지침을 충족하거나 준수합니다.
              </li>
              <li>
                소환장, 법원 명령 또는 당사, 서비스 제공업체 또는 귀하가 법적
                책임을 지는 법적 절차에 따라 범죄 수사를 지원하기 위해
              </li>
              <li>
                귀하가 거주하는 국가 내외의 정부 및/또는 수사 당국의 요청을
                지원하기 위해
              </li>
              <li>
                <b>고객 서비스를 수행하기 위해</b>
              </li>
              <li>
                귀하 또는 귀하를 대신하여 제공한(또는 제공한 것으로 간주되는)
                고객 문의 및 불만 사항을 지원하고 귀하의 지시를 이행하기 위해
              </li>
              <li>
                서비스와 관련된 관리 및 기타 중요한 정보를 귀하에게 알리고
                필요한 경우 귀하에게 연락합니다.
              </li>
              <li>귀하에게 고객 지원 및 서비스를 제공하기 위해</li>
              <li>
                <b>서비스, 이벤트, 제품 홍보를 위해</b>
              </li>
              <li>
                판촉 및 마케팅 목적으로 다양한 유형의 커뮤니케이션을 전송합니다.
              </li>
              <li>타겟 마케팅 및 프로모션 제안을 제공하기 위해</li>
              <li>
                <b>
                  당사는 다음 조건에 따라 추가 목적으로 귀하의 정보를 사용하고
                  처리할 수 있습니다.
                </b>
              </li>
              <li>
                해당 목적을 위해 귀하의 정보를 수집하기 전에 추가 목적이
                귀하에게 공개됩니다.
              </li>
              <li>추가적인 목적으로 수집/이용/처리/공개하는 데 동의합니다.</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              6. 개인정보는 언제, 누구와 공유 및 제공되나요?
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              당사는 원칙적으로 귀하의 개인정보를 외부와 공유하지 않습니다.
              그러나 당사는 노벨덕의 대리인, 공급업체 및 컨설턴트(지원 회사)와
              귀하의 개인정보를 공유하고 제공할 수 있지만 이에 국한되지는
              않습니다. 및 노벨덕를 대신하여 서비스를 제공하는 회사(이하 서비스
              제공업체) 다음과 같은 경우:
            </p>
            <ul className="my-6 ml-6 list-disc text-muted-foreground [&>li]:mt-2">
              <li>
                당사는 귀하로부터 또는 귀하의 지시에 따라 본 개인정보 보호정책에
                대한 동의를 얻은 경우 귀하의 정보를 외부 당사자와 공유할 수
                있습니다.
              </li>
              <li>
                다음 프로세스를 위해 서비스 제공업체(및 계열사)와 공유: 청구 및
                결제 프로세스 데이터 저장 및 개발 및/또는 서비스 제공에 필요한
                관리 서비스 및 기타 제3자 서비스
              </li>
              <li>
                당사를 대신하여 다음 프로세스를 위해 계열사, 그룹사 및/또는
                자회사와 함께: 콘텐츠와 경험을 개인화 또는 당사 제품 및 서비스
                또는 제3자의 제품 및 서비스에 대한 프로모션 및 이벤트 제공
              </li>
              <li>
                법적인 이유로 법 집행 기관 및 적절한 제3자와 공유 범죄자, 사기,
                지적 재산권 침해 또는 기타 의심되는 불법 활동을 조사하기 위해,
                또는 해당 법률에서 요구할 수 있거나 당사의 합법적인 법적 및
                사업적 이익을 보호하기 위해 단독 재량에 따라 필요하다고 판단하는
                경우.
              </li>
              <li>
                기업 구조 조정 당사는 사업 거래를 하거나 사업이나 자산의 전부
                또는 일부 매각 또는 양도를 포함하는 사업 거래를 협상할 때
                개인정보를 공유할 수 있습니다. 이러한 거래에는 합병, 자금 조달,
                인수, 파산 거래 또는 절차가 포함될 수 있습니다.
              </li>
            </ul>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              본 개인 정보 보호 정책에 공개된 경우를 제외하고 당사는 귀하의
              명시적인 허가가 없는 한 온라인(또는 모바일)에서 수집한 개인 정보를
              판매, 거래, 임대하지 않습니다.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              7. 당사는 개인정보를 얼마나 오래 보유하나요?
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              당사는 다음 조건에 따라 귀하의 정보를 처리하고 저장할 수 있습니다.
            </p>
            <ul className="my-6 ml-6 list-disc text-muted-foreground [&>li]:mt-2">
              <li>
                귀하가 당사 플랫폼을 사용하는 동안(귀하의 계정이 폐쇄되거나
                삭제되지 않은 동안)
              </li>
              <li>법률, 규정, 계약 또는 법적 의무에 따라 요구되는 경우</li>
              <li>
                개인 정보 보호 정책에 설명된 목적을 위해 귀하의 정보가 필요한
                동안
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              8. 정보는 언제, 어떻게 삭제되나요?
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              당사는 (1) 해당 개인정보의 목적이 수집된 정보는 더 이상 해당
              개인정보의 보유로 인해 제공되지 않습니다. (2) 다른 법적 또는
              사업적 목적을 위해 더 이상 보관이 필요하지 않습니다. 관계법령의
              규정에 따라 개인정보를 보관해야 하는 경우, 당사는 해당 법령에서
              정한 기간 동안 보관한 후 파기합니다. 당사가 저장 및 관리하고 있는
              개인정보는 법률에 의한 경우나 귀하가 동의하지 않은 목적으로
              이용되지 않습니다. 그러나 귀하가 플랫폼에서 다른 사람들과 공유한
              일부 정보(댓글, 게시판 게시, 플랫폼의 다른 사용자와의 커뮤니케이션
              및 특정 제출물 등)는 귀하가 계정을 폐쇄한 후에도 계속 표시될 수
              있으며 앞으로도 계속 표시될 가능성이 높습니다. 그럼에도 불구하고,
              노벨덕 (contact@novelduck.farm) 에 문의하시기 바랍니다. 노벨덕의
              단독적이고 합리적인 재량에 따라 노벨덕은 해당 콘텐츠를 삭제하는 데
              도움을 줄 수 있으며 법적으로 의무가 있는 범위 내에서 언제 어디서나
              삭제를 수행할 것입니다.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              9. 아동의 개인정보
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              노벨덕은 어린이의 개인 정보 보호 문제에 매우 민감하므로 인터넷을
              사용하는 어린이의 개인 정보를 보호하기 위해 노력합니다. 약관에
              자세히 설명된 대로 플랫폼은 18세 이상의 사용자를 대상으로 합니다.
              당사는 관할권 법률에 따라 만 13세 미만 사용자(이하 아동)에 대한
              정보를 의도적으로 수집, 처리, 사용, 공유하지 않습니다. 다만,
              아동에 관한 정보를 수집, 처리, 이용, 공유, 공개할 필요가 있는
              경우에는 부모 또는 법적 보호자로부터 관련 동의를 얻습니다. 부모
              또는 법적 보호자는 자녀가 온라인(모바일) 활동에 참여할 때 감독해야
              합니다. 당사 플랫폼을 사용하는 아동이 있는 경우 당사가 당사
              플랫폼에 대한 액세스를 방지하기 위한 즉각적인 조치를 취할 수
              있도록 알려 주시기 바랍니다.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              10. 귀하의 정보를 해외로 전송합니까?
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              귀하가 당사 서비스를 이용하는 동안 귀하의 정보는 본 개인정보
              보호정책에 따라 귀하의 거주 국가 내외로 전송, 저장 및 처리될 수
              있습니다. 귀하가 당사에 제공한 정보는 대한민국(한국)(Supabase)에
              위치한 당사의 IT 인프라에 저장되며 대한민국(한국)으로 전송됩니다.
              당사는 귀하의 정보의 개인정보 보호 및 보안을 보호하고 귀하와
              당사의 관계 및 본 개인정보 보호정책에 설명된 조건에 따라서만 해당
              정보를 사용하기 위해 적절한 기술적, 물리적, 관리적 보호 장치를
              구현하기 위해 노력합니다. 또한 당사는 가능하고 적절할 때마다
              서비스 제공업체와 서비스 계약 및 관련 조항을 체결합니다.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              11. 개인정보 보호를 위해 어떤 종류의 보안 조치가 시행되고
              있습니까?
            </h3>
            <ul className="my-6 ml-6 list-disc text-muted-foreground [&>li]:mt-2">
              <li>액세스 제어(보안 비밀번호 정책 포함)</li>
              <li>개인정보의 가명화 및 암호화</li>
              <li>바이러스 백신 소프트웨어 및 방화벽 설치</li>
              <li>방화벽 구현</li>
              <li>책임 규명을 위한 이벤트 로그 관리 및 모니터링</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              12. 귀하의 개인정보에 관한 귀하의 권리는 무엇입니까?
            </h3>
            <ul className="my-6 ml-6 list-disc text-muted-foreground [&>li]:mt-2">
              <li>접근권</li>
              <li>교정할 권리</li>
              <li>삭제할 권리</li>
              <li>처리 제한 권리</li>
              <li>데이터 이동성에 대한 권리</li>
              <li>반대할 권리</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              13. 본 개인정보 보호정책의 변경
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              당사는 단독적이고 절대적인 재량에 따라 귀하에게 통지하지 않고
              언제든지 본 개인정보 보호정책의 일부를 변경, 수정, 추가 또는
              제거할 수 있는 권리를 보유하며, 그러한 새로운 개인정보 보호정책은
              플랫폼에 게시되는 즉시 즉시 적용됩니다. 당사는 본 개인정보
              보호정책의 변경 사항에 대해 다른 통지를 제공하지 않습니다. 귀하가
              플랫폼을 사용한다는 것은 귀하가 최신 버전의 개인정보 보호정책을
              준수하게 된다는 것을 의미합니다. 본 개인정보 보호정책의 변경
              사항을 인지하는 것은 전적으로 귀하의 책임이므로 자주 다시 확인하여
              최신 버전의 개인정보 보호정책을 검토하시기 바랍니다. 본 개인정보
              보호정책의 변경 사항에 동의하지 않고 귀하의 개인정보가 개정된
              개인정보 보호정책의 적용을 받는 것을 원하지 않는 경우 계정을
              폐쇄하거나 서비스 이용을 중단하시기 바랍니다.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              14. 문의사항, 우려사항, 불만사항이 있는 경우 어떻게 연락하나요?
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              귀하의 권리에 대해 문의사항이 있는 경우 contact@novelduck.farm
              으로 문의하시기 바랍니다.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              15. 최종 수정됨
            </h3>
            <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
              2024년 1월 2일
            </p>
          </div>
        </article>
      </section>
    </ScreenContainer>
  )
}

export default ServerPage

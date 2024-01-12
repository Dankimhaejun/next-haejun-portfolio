import Link from 'next/link'
import Animation from './animation'

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 김해준입니다.
          <br></br>
          <br className="hidden lg:inline-block" />
          소개합니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과 국민의
          자유와 복리의 증진 및 민족문화의 창달에 노력하여 대통령으로서의 직책을
          성실히 수행할 것을 국민 앞에 엄숙히 선서합니다. 대통령은 조국의 평화적
          통일을 위한 성실한 의무를 진다. 국토와 자원은 국가의 보호를 받으며,
          국가는 그 균형있는 개발과 이용을 위하여 필요한 계획을 수립한다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  )
}

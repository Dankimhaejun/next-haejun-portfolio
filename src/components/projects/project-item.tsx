import Link from 'next/link'
import Image from 'next/image'

export default function ProjectItem({ data }) {
  const { Name, Video, Description, Tags, Created } = data.properties
  const title = Name.title[0]?.plain_text
  const video = Video?.url || 'https://github.com/Dankimhaejun'
  const description =
    Description?.rich_text[0]?.plain_text || '포트폴리오입니다.'
  const cover = data.cover?.external.url || ''
  const tags = Tags?.multi_select || []
  const created = Created?.date?.start || ''

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={cover}
        alt="cover image"
        width={0}
        height={0}
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <h3 className="mt-4 text-xl">{created}</h3>
        <Link href={video}>비디오 보러가기</Link>
        <div className="flex items-start mt-2">
          {tags.map((tag, i) => (
            <h1
              key={i}
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
            >
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  )
}

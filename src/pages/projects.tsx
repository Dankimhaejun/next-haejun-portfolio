import Layout from '@/components/layout'
import ProjectItem from '@/components/projects/project-item'
import Head from 'next/head'

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-24 mb-10 px-6">
        <Head>
          <title>Kim Hae Jun 포트폴리오</title>
          <meta name="description" content="포트폴리오" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트:
          <span className="pl-4 text-blue-500">{projects.length}</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 p-12 m-4 gap-8">
          {projects.map((project, i) => (
            <ProjectItem data={project} key={i} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  console.log('process.env.NOTION_DATABASE :>> ', process.env.NOTION_DATABASE)
  console.log('process.env.NOTION_TOKEN :>> ', process.env.NOTION_TOKEN)

  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE}/query`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
    },
  )
  const projects = await res.json()
  // const res = await fetch(
  //   `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE}`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
  //       'Notion-Version': '2022-06-28',
  //       'Content-Type': 'application/json',
  //     },
  //   },
  // )

  return {
    props: {
      projects: projects.results,
    },
  }
}

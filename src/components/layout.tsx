type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <h1>Layout</h1>
      <div>{children}</div>
    </>
  )
}

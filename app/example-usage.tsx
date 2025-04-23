import { SectionContainer } from "@/components/section-container"

export default function ExamplePage() {
  return (
    <div className="flex flex-col w-full">
      <SectionContainer className="py-12 md:py-24 lg:py-32 bg-muted">
        <h1>This content will be centered</h1>
        <p>Using our consistent container component</p>
      </SectionContainer>

      <SectionContainer className="py-12 md:py-24 lg:py-32">
        <h2>Another section</h2>
        <p>Also properly centered</p>
      </SectionContainer>
    </div>
  )
}

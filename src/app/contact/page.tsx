import { Heading, PageLayout } from '../_common/components';

export default function About() {
  return (
    <PageLayout>
      <Heading tag="h1">Contact Mason</Heading>
      <Heading tag="h2">E-mail</Heading>
      <a href="mailto:msntrnrdev@gmail.com">msntrnrdev@gmail.com</a>
      <Heading tag="h2">LinkedIn</Heading>
      <a href="https://www.linkedin.com/in/msntrnr/" target="_blank" rel="noreferrer">
        Mason&apos;s LinkedIn
      </a>
      <Heading tag="h2">Github</Heading>
      <a href="http://github.com/tb9-mason" target="_blank" rel="noreferrer">
        Mason&apos;s Github
      </a>
      <div className="bg-white">
        <span className="bg-white">hello world</span>
      </div>
    </PageLayout>
  );
}

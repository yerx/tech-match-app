/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import IndexPage from "../components/index";

export default function Home() {
  return (
    <div sx={{ height: `calc(100vh - 60px)`}}>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>Small steps</h1>
    </div>
      <IndexPage />
    </div>
  );
}

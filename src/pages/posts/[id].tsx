import { GetServerSideProps } from "next";

interface PostProps {
  id: string;
}

export default function Post({id}: PostProps) {
  return <div className="flex">
    <h1>DUMMY POST</h1>
  </div>
}

export const getServerSideProps: GetServerSideProps = async({query}) => {
  const {id} = query

  return {
    props: {
      id
    }
  }
}
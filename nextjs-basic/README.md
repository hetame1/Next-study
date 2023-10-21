# NextJS

## Data Fetching

### getStaticProps

- Static Generation 으로 빌드(build)할 때 데이터를 불러옴 (미리 만들어줌)

- 빌드 시점에만 실행되고, 빌드 이후에는 실행되지 않음

### getStaticPaths

- Static Generation 으로 데이터에 기반하여 pre-render시 특정한 동적 라우팅 구현(/pages/post[id].js)

- 빌드 시점에만 실행되고, 빌드 이후에는 실행되지 않음

- fallback: false - getStaticPaths 에서 정의하지 않은 경로는 404 page로 이동

### getServerSideProps

- Server Side Rendering 으로 요청이 있을 때 데이터를 불러옵니다\

- 매 요청마다 실행됨

### getStaticProps 사용해야 할 때

- 페이지를 렌더링하는 데 필요한 데이터는 사용자의 요청보다 먼저 build 시간에 필요한 데이터를 가져올 때

- 데이터를 공개적으로 캐시할 수 있는 경우

- 페이지는 미리 렌더링되어야 하고 (SEO) 매우 빨라야 할 때

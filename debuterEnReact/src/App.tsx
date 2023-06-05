import { lazy, Suspense } from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import MyFakeShop from './fakeShop/MyFakeShop';

const pages = {
  "basicJSTS": ["JavaScript", "TypeScript"],
  "basicComponents": ["StaticComponent", "PropsComponent", "StateComponent", "HighOrderComponent"],
  "basicHook": ["UseState", "UseEffect", "UseEffectWithDep", "UseCallback", "UseMemo", "UseReducer", "CustomHook"],
}
const pageName = ((page: string) => page.split("/")[page.split("/").length - 1])
function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Layout />}>
          {Object.entries(pages).map(([key, values]) => {
            return values.map(value => {
              const Component = lazy(() => import(`./${key}/${value}.tsx`));
              return <Route key={value} path={value} element={
                <Suspense fallback={<>loading...</>}>
                  <div>
                    <h2>{value}</h2>
                    <Component />
                  </div>
                </Suspense>
              } />
            })
          })}
          <Route path="MyFakeShop/*" element={<MyFakeShop />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}

function Layout() {
  return (
    <div>
      <nav>
        <dl style={{ display: 'flex', flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start", gap: "5vh" }}>
          <dt>
            <Link to="/">Home</Link>
          </dt>
          {Object.entries(pages).map(([topics, listPage]) => <dd key={topics}><h3 style={{ margin: 0 }}>{topics}</h3><ul>{listPage.map(page => <li key={page}><Link to={`/${pageName(page)}`}>{pageName(page)}</Link></li>)}</ul></dd>)}
          <dt>
            <h3>MyFakeShop</h3>
            <Link to="/MyFakeShop/">MyFakeShop</Link>
          </dt>
          <dt>
            <Link to="/nothing-here">Nothing Here</Link>
          </dt>
        </dl>
      </nav>
      <hr />
      <Outlet />
    </div >
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


export default App

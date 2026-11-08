import { ChakraProvider } from "@chakra-ui/react";
import { Route, Switch, Router as WouterRouter } from "wouter";
import Layout from "@/components/layout";
import theme from "@/theme";
import IndexPage from "@/pages/index";
import ExperiencePage from "@/pages/experience";
import ProjectsPage from "@/pages/projects/index";
import WritingsPage from "@/pages/writing/index";
import WritingPage from "@/pages/writing/[slug]";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Layout>
          <Switch>
            <Route path="/" component={IndexPage} />
            <Route path="/experience" component={ExperiencePage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/writing" component={WritingsPage} />
            <Route path="/writing/:slug" component={WritingPage} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </WouterRouter>
    </ChakraProvider>
  );
}

export default App;

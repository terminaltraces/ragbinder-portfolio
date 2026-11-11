import { ChakraProvider } from "@chakra-ui/react";
import { Route, Switch, Router as WouterRouter } from "wouter";
import Layout from "@/components/layout";
import theme from "@/theme";
import { lazy, Suspense } from "react";
import { Box, Text } from "@chakra-ui/react";
import PageBoundary from "@/components/PageBoundary";
import IndexPage from "@/pages/index";
import NotFound from "@/pages/not-found";

const ExperiencePage = lazy(() => import("@/pages/experience"));
const ProjectsPage = lazy(() => import("@/pages/projects/index"));
const WritingsPage = lazy(() => import("@/pages/writing/index"));
const WritingPage = lazy(() => import("@/pages/writing/[slug]"));

function App({ ssrPath }: { ssrPath?: string }) {
  return (
    <ChakraProvider theme={theme}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")} ssrPath={ssrPath}>
        <Layout>
          <PageBoundary>
            <Suspense fallback={<Box role="status" minH="10rem"><Text>Loading…</Text></Box>}>
              <Switch>
                <Route path="/" component={IndexPage} />
                <Route path="/experience" component={ExperiencePage} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/writing" component={WritingsPage} />
                <Route path="/writing/:slug" component={WritingPage} />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </PageBoundary>
        </Layout>
      </WouterRouter>
    </ChakraProvider>
  );
}

export default App;

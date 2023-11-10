import { registerApplication, start } from 'single-spa';
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';

const routes = constructRoutes(`
<single-spa-router mode="hash" base="/">
  <route default>
    <application name="@my-app/home"></application>
  </route>
  <route path="basic">
    <application name="@my-app/basic"></application>
  </route>
  <route path="sales">
    <application name="@my-app/sales"></application>
  </route>
</single-spa-router>
`);

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
# HolidayCards
Webpack released version 5 on October 10, 2020 has a new feature, Module Federation, which allows multiple webpack builds to work together. One application can dynamically run code from another bundle or build, on the client and the server. This is the foundation of micro frontends.

Each build acts as a container and also consumes other builds as containers. This way each build is able to access any other exposed module by loading it from its container.
Each webpack build can be a host, which is a container to load other builds. It can also serve as a remote, which is a micro frontend to be loaded. Each application can be a remote and a host that is consumable and consumer of any other federated modules in the system. Bidirectional-hosts, and even omnidirectional-hosts, can be set up easily with webpack configurations.

In addition, module federation does not need to load the main entry point or another entire application. It only needs to load the needed code, i.e. a few kilobytes of code. This approach works with any JavaScript code without redundant packages for shared utilities and components.

Can use react components from other projects while receiving updates, both during build and runtime.

If website consists of many applications, you can have a dedicated app to load and route between all projects.

Another use case is to incorporate a design system at runtime, since you are fetching the components from a different origin at runtime, you can get the latest version from your design system without rebuilding and deploying.

Shared modules are modules that are both overridable and provided as overrides to nested container. They usually point to the same module in each build, e.g. the same library.

Refer -
https://webpack.js.org/concepts/module-federation/
https://betterprogramming.pub/micro-frontends-using-webpack-5-module-federation-3b97ffb22a0d
https://www.linkedin.com/pulse/micro-frontends-hands-on-example-using-react-webpack-rany/

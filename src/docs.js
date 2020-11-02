const docs = [
  {
    label: "Getting Started",
    route: "/getting-started",
    children: [
      {
        label: "Overview",
        route: "/getting-started/overview",
      },
      {
        label: "Environment Setup",
        route: "/getting-started/environment-setup",
      },
    ],
  },
  {
    label: "Usage",
    children: [
      {
        label: "Adding Products",
        route: "/usage/adding-products",
      },
      {
        label: "Adding Stripe Key",
        route: "/usage/adding-stripe-key",
      },
      {
        label: "Adding Dashboard Users",
        route: "/usage/adding-dashboard-users",
      },
    ],
  },
  {
    label: "Developing",
    children: [
      {
        label: "Systems Diagram",
        route: "/developing/systems-diagram",
      },
      {
        label: "Creating Endpoints",
        route: "/developing/creating-endpoints",
      },
      {
        label: "Theming",
        route: "/developing/theming",
      },
    ],
  },
  {
    label: "Deploying",
    children: [
      {
        label: "AWS",
        route: "/deploying/AWS",
      },
      {
        label: "GCP",
        route: "/deploying/GCP",
      },
      {
        label: "Azure",
        route: "/deploying/Azure",
      },
    ],
  },
];

const populatePageRoutes = (docs) => {
  const populated = docs.map((item) => {
    item.children.forEach((child, index) => {
      let route = child.label;
      route = route.toLowerCase();
      route = route.replace(/ /g, "-");
      child.route = route;
    });
  });

  return populated;
};

const validateDocs = (docs) => {
  for (let i = 0; i < docs.length; i++) {
    if (docs[i].id !== i) {
      throw new Error(
        `Exception at ${docs[i].label} - id property is not in order.`
      );
    }
  }
};

export { docs };

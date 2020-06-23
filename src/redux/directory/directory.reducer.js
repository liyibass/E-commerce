const initialState = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "hats",
      //   imageUrl: "../../imgs/section/hats.png",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "",
    },
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "",
    },
    {
      title: "women",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      id: 4,
      linkUrl: "",
      size: "large",
    },
    {
      title: "men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      id: 5,
      linkUrl: "",
      size: "large",
    },
  ],
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return initialState;
  }
};

export default directoryReducer;

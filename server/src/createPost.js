module.exports = async event => {
  // Get the data from the event - the data
  // is determined by the subscription. In our case, it will look like this:
  // event = {
  //     "data": {
  //         "Post": {
  //             "node": {
  //                 "id": "LINK_ID"
  //                 "imageUrl": "IMG_URL"
  //                 "description": "DESCRIPTION"
  //             }
  //         }
  //     }
  // }

  const { id } = event.data.Link.node;

  return {
    data: {
      success: true,
      id: id,
    },
  };
};

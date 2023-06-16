//in real world application this will be an api call
export const getCompletedTasks = () => {
  return [
    {
      _id: "789",
      title: "Mobile App Design",
      coverImage:
        "https://cdn.dribbble.com/userupload/3246132/file/original-d17aaff41fec3353fe80fc8f7372253e.png?compress=1&resize=1504x1128",
      numberOfComments: 12,
      numberOfFiles: 15,
      priority: "COMPLETED",
      people: [
        {
          pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwZ2QmjlShNNeUuEVF-RNFZrwJo3Y9k-LRw&usqp=CAU",
        },
        {
          pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwZ2QmjlShNNeUuEVF-RNFZrwJo3Y9k-LRw&usqp=CAU",
        },
        {
          pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwZ2QmjlShNNeUuEVF-RNFZrwJo3Y9k-LRw&usqp=CAU",
        },
      ],
    },
    {
      _id: "8888",
      title: "Design System",
      description: "It just needs to adapt the UI from what you did before ",
      numberOfComments: 1,
      priority: "LOW",
      people: [
        {
          pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwZ2QmjlShNNeUuEVF-RNFZrwJo3Y9k-LRw&usqp=CAU",
        },
        {
          pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwZ2QmjlShNNeUuEVF-RNFZrwJo3Y9k-LRw&usqp=CAU",
        },
        {
          pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwZ2QmjlShNNeUuEVF-RNFZrwJo3Y9k-LRw&usqp=CAU",
        },
      ],
    },
  ];
};

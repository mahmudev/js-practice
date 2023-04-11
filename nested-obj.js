let data1 = {
  Sophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "ABC primary school" },
          { location: "Peters burg" },
        ],
      },
      {
        secondary: [
          { school_name: "ABC secondary school" },
          { location: "St Lorence" },
        ],
      },
    ],
  },
};

// const secondarySchool = data.Sophia.study[1].secondary[0].school_name
// console.log(secondarySchool);

let data = [
  {
    pHeroCourses: {
      "course-x": "web development",
    },
  },
  {
    pHeroCourses: {
      "course-y": "phitron",
    },
  },
  {
    pHeroCourses: {
      "course-z": "acc",
    },
  },
  {
    pHeroCourses: {
      "course-xyz": "level-2",
    },
    locationField: {
      "en-US": {
        lat: 19.28563,
        lon: 72.8691,
      },
    },
  },
];

// const nestedArray = data[3].pHeroCourses["course-xyz"]
// console.log(nestedArray);

// const array2d = data[3].locationField["en-US"].lon
// console.log(array2d);

let activities = {
  activity1: [
    {
      name: "listen on spotify",
      song_list: {
        song_1: "abc",
        song_2: "bcd",
      },
      id: 1,
    },
    {
      name: "listen music through bot",
      song_list: {
        song_1: "wxy",
        song_2: "xyz",
      },
      id: 2,
    },
  ],
};

// const abcData = activities.activity1[0].song_list["song_1"]
// console.log(abcData);

// const xyzData = activities.activity1[1].song_list.song_2
// console.log(xyzData);

let students = {
  2222: {
    name: "Jack",
    section: "C",
    class: "IX",
    address: {
      "building no": 12,
      street: "St. Jonson",
      city: "Petersburg",
      country: "UK",
    },
  },

  3333: {
    name: "Herry",
    section: "D",
    class: "X",
    address: {
      "building no": 85,
      street: "DC road",
      city: "Kachukhet",
      country: "Bangladesh",
    },
  },
};

// const displayStudent = students[3333].name
// console.log(displayStudent);

// const displayCity = students[2222].address.city
// console.log(displayCity);

let instructor = {
  name: "Jhankar Mahbub",
  entrepreneur: true,
  additionalData: {
    writer: true,
    favoriteHobbies: ["travelling", "Coding"],
    books: ["programming er bolod to bos", "programming er coddogosti"],
    moreDetails: {
      favoriteBasketballTeam: "XYZ",
      isYoungest: true,
      hometown: {
        city: "ABC",
        state: "VW",
      },
      countriesLivedIn: ["Bangladesh", "New York"],
    },
  },
};

// const vwData = instructor["additionalData"]["moreDetails"]["hometown"]["state"]
// console.log(vwData);

// const bdData = instructor.additionalData.moreDetails.countriesLivedIn[0]
// console.log(bdData);

const studentData = [
  {
    class: 10,
    details: [
      {
        studentId: "1",
        gradingDetails: [{ grade: "A" }],
      },
      {
        studentId: "2",
        gradingDetails: [{ grade: "B" }],
      },
    ],
  },
  {
    class: 11,
    details: [
      {
        studentId: 3,
        gradingDetails: [{ grade: "B" }],
      },
      {
        studentId: 4,
        gradingDetails: [{ grade: "D" }],
      },
    ],
  },
];
//  const dataB = studentData[0]["details"][1]["gradingDetails"][0]["grade"]
//  console.log(dataB);

// const dataD = studentData[1]["details"][1]["gradingDetails"][0]["grade"]
// console.log(dataD);

let dataB = {
  data: [
    {
      bookId: 1,
      bookDetails: {
        name: "habluder adda",
        category: "XYZ",
        price: "20$",
      },
      bookCategory: "Basic",
    },
    {
      bookId: 2,
      bookDetails: {
        name: "gobluder adda",
        category: "ABC",
        price: "40$",
      },
      bookCategory: "Beginner",
    },
  ],
};

// const name = dataB["data"][0]["bookDetails"]["name"]
// console.log(name);

import IconBussiness from "@/assets/images/business-icon.svg";
import IconCustomer from "@/assets/images/customer-icon.svg";
import IconProject from "@/assets/images/project-icon.svg";

import Customer1 from "@/assets/images/customer1.svg";
import Customer2 from "@/assets/images/customer2.svg";
import IconStar from "@/assets/images/start-icon.svg";

import IconPeople from "@/assets/images/people-icon.svg";
import People from "@/assets/images/people.svg";
import Design from "@/assets/images/design.svg";
import IconDesign from "@/assets/images/design-icon.svg";
import IconService from "@/assets/images/service-icon.svg";
import Service from "@/assets/images/service.svg";

import Task from "@/assets/images/task-icon.svg";

export const links = [
  "Home",
  "About us",
  "Service",
  "Pricing",
  "Blog",
  "Contact",
];

export const BusinessOverviewData = [
  {
    img: IconBussiness,
    title: " 12 years",
    heading: "in business",
    texts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: IconCustomer,
    title: "200+",
    heading: "happy customers",
    texts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: IconProject,
    title: " 300+",
    heading: "completed projects",
    texts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const CustomReviewDatas = [
  {
    img: Customer2,
    imgStar: IconStar,
    name: " Katherine",
    job: "Journalist",
    title: "Lorem Ipsum is simply dummy text",
    texts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    img: Customer1,
    imgStar: IconStar,
    name: " Jake",
    job: "Journalist",
    title: "Lorem Ipsum is simply dummy text",
    texts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export const WhyChooseUsData2 = [
  {
    id: 1,
    content: {
      image: Task,
      title: "  Lorem ipsum",
      text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  },
  {
    id: 2,
    content: {
      image: Task,
      title: "  Lorem ipsum",
      text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  },
  {
    id: 3,
    content: {
      image: Task,
      title: "  Lorem ipsum",
      text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  },
  {
    id: undefined,
    content: {
      image: "",
      title: " ",
      text: " ",
    },
  },
  {
    id: 4,
    content: {
      image: Task,
      title: "  Lorem ipsum",
      text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  },
  {
    id: 5,
    content: {
      image: Task,
      title: "  Lorem ipsum",
      text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  },
];

export const WhyChooseUsData1 = [
  {
    id: 1,
    img: People,
    description: {
      img: IconPeople,
      title: "Our people",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  },
  {
    id: 2,
    img: Design,
    description: {
      img: IconDesign,
      title: "Our up-to-date design",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  },
  {
    id: 3,
    img: Service,
    description: {
      img: IconService,
      title: "Our quality service",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  },
];

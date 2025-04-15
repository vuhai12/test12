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
import Logo from "@/assets/images/logo.svg";

import IconPhoneFooter from "@/assets/images/icon-phone-footer.svg";
import IconFaxFooter from "@/assets/images/icon-fax-footer.svg";
import IconMailFooter from "@/assets/images/icon-mail-footer.svg";
import IconYoutube from "@/assets/images/icon-youtube.svg";
import IconFacebook from "@/assets/images/icon-facebook.svg";
import ImageCompany from "@/assets/images/img-company.svg";
import ImageMap from "@/assets/images/img-map.svg";

export const links = [
  "Home",
  "About us",
  "Service",
  "Pricing",
  "Blog",
  "Contact",
];

export const SectionWepromiseData = [
  {
    id: 1,
    img: IconBussiness,
    title: " 12 years",
    heading: "in business",
    texts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    img: IconCustomer,
    title: "200+",
    heading: "happy customers",
    texts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    img: IconProject,
    title: " 300+",
    heading: "completed projects",
    texts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const SectionCustomReviewDatas = [
  {
    id: 1,
    img: Customer2,
    imgStar: IconStar,
    name: " Katherine",
    job: "Journalist",
    title: "Lorem Ipsum is simply dummy text",
    texts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    img: Customer1,
    imgStar: IconStar,
    name: " Jake",
    job: "Journalist",
    title: "Lorem Ipsum is simply dummy text",
    texts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export const SectionWhyChooseUsData2 = [
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

export const SectionWhyChooseUsData1 = [
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

export const FooterDatas = {
  logo: Logo,
  slogan:
    "NGCONS provides professional home design and construction services in Hanoi, Vietnam.",
  title: "Office",
  address:
    "No. 3, 29/70/19 Khuong Ha Street, Thanh Xuan District, Hanoi, Vietnam",
  contact: [
    {
      id: 1,
      img: IconPhoneFooter,
      name: "Phone",
      text: "0922063999",
    },
    {
      id: 2,
      img: IconFaxFooter,
      name: "Fax",
      text: "(+84) 922 063 999",
    },
    {
      id: 3,
      img: IconMailFooter,
      name: "Email",
      text: "ngcons.connection@gmail.com",
    },
  ],
  social: {
    title: "Follow Us On",
    imgs: [
      { id: 1, name: "IconYoutube", img: IconYoutube },
      { id: 2, name: "IconFacebook", img: IconFacebook },
    ],
  },
  officeType: [
    {
      id: 1,
      name: "Company office",
      img: ImageCompany,
    },
    {
      id: 2,
      name: "Branch office",
      img: ImageMap,
    },
  ],
};

export const InputDatas = [
  {
    id: 1,
    lable: "Your name",
    placeholder: "Full name",
  },
  {
    id: 2,
    lable: "Phone number",
    placeholder: "Phone number",
  },
  {
    id: 3,
    lable: "Your email",
    placeholder: "Your email",
  },
  {
    id: 4,
    lable: "Your message",
    placeholder: "Your message",
  },
];

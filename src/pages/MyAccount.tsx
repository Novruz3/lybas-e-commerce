import { Breadcrumb, Table, TextInput } from "flowbite-react";
import { Comment } from "../components/Comments/Comment";
import { useState } from "react";

const tabs = [
  {
    title: "Profile",
    content: (
      <div className="col-span-2 p-4 flex-col">
        <p className="font-bold text-lg">Profile</p>
        <div className="flex gap-2 items-center mt-4">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/f4b7/948e/124e20f5cbbcbe4483b2cd905d98737e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OT4V0Tlhm5lLduQbxIX7yYiB~zLMqWXo2RoyW9USAxjJKL9vVmOPT2ru-BRm4grMhGBwiqYIN8BuniwPCXmgrPAuC2LjOYIeyWmlbqNu-qIVIRgVYJI5spzGIvnQ2KQs8heZRhv3Mgued-WAY7l6rjtMkdX6rzqS9R7L5hvp~TIY1XWpFjwX7yqI8lmX~9h5ZVF5ZiAOcnoXYbRi9ijFmW5jyiPkM71uXcLIOPHcKfbZkUF-wE7pAlhhb8IsTxkN9YPXN-kkDqkLZw1HyDNg2MuRvwIB0~ATjfI5~QFYGtkaDiEqDgTn2bA~646aFV7OkS7bvn177mDh09oHAvY2Lg__"
            alt=""
          />
          <div>
            <p className="font-bold text-sm">Edit photo</p>
            <div className="flex gap-2 text-[12px]">
              <p className="text-blue-500">Upload</p>
              <p className="text-gray-500">Delete</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 md:pr-24">
          <TextInput
            id="firstName"
            type="text"
            placeholder="First name*"
            className="bg-white"
            required
          />
          <TextInput
            id="lastname"
            type="text"
            placeholder="Last name*"
            className="bg-white"
            required
          />
          <TextInput
            id="phone"
            type="text"
            placeholder="+993"
            className="bg-white"
            required
          />
          <TextInput
            id="note"
            type="text"
            placeholder="Note"
            className="bg-white"
            required
          />
        </div>
        <button className="border rounded-lg py-2 px-4 mt-16 md:w-56">
          <p className="text-blue-500">Edit</p>
        </button>
      </div>
    ),
  },
  {
    title: "My address",
    content: (
      <div className="col-span-2 p-4 flex-col">
        <p className="font-bold text-lg">My address</p>
        <div className="mt-4 flex flex-col">
          <button className="border rounded-lg py-2 px-4 md:w-56 text-start flex-col">
            <p className="text-gray-500 text-sm">Province</p>
            <p className="text-gray-500 text-sm">Your addres</p>
          </button>
          <button className="border rounded-lg py-2 px-4 md:w-36 bg-blue-600 mt-32">
            <p className="text-white text-sm ">Add</p>
          </button>
        </div>
      </div>
    ),
  },
  {
    title: "Orders",
    content: (
      <div className="overflow-x-auto col-span-2">
        <Table>
          <Table.Head>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Order number</Table.HeadCell>
            <Table.HeadCell>Data</Table.HeadCell>
            <Table.HeadCell>Total amaunt</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Feedback</span>
            </Table.HeadCell>
            <Table.HeadCell>More</Table.HeadCell>
          </Table.Head>
        </Table>
      </div>
    ),
  },
  {
    title: "My feedback",
    content: (
      <div className="col-span-2 p-4 flex-col">
        <p className="font-bold text-lg">My fedbacks</p>
        <div className="p-2 space-y-4">
          <Comment />
          <Comment />
        </div>
      </div>
    ),
  },
];

export const MyAccount = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  return (
    <>
      <div>
        <Breadcrumb aria-label="Default breadcrumb example" className="mt-4">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item>My accounts</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="mt-2">
        <p className="text-3xl font-bold">My account</p>
        <div className="grid grid-cols-3 border rounded-lg my-8">
          <div className="col-spam-1 bg-gray-100 rounded-l-lg py-4 px-8">
            <ul>
              {tabs.map((tab, i) => {
                return (
                  <li
                    onClick={() => setTabIndex(i)}
                    key={i}
                    className="hover:bg-blue-600 hover:text-white text-gray-600 rounded-lg px-4 py-2 mb-1"
                  >
                    {tab.title}
                  </li>
                );
              })}
              <li className="hover:bg-blue-600 hover:text-white text-gray-600 rounded-lg px-4 py-2 mb-1">
                Logout
              </li>
            </ul>
          </div>
          {tabs[tabIndex].content}
        </div>
      </div>
    </>
  );
};

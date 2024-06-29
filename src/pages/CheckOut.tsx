import {
  Breadcrumb,
  Button,
  List,
  Table,
  TextInput,
  Textarea,
} from "flowbite-react";
import { FiMinus, FiPlus } from "react-icons/fi";

export const CheckOut = () => {
  return (
    <>
      <div>
        <Breadcrumb aria-label="Default breadcrumb example" className="mt-4">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Dresses</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Matalar</Breadcrumb.Item>
          <Breadcrumb.Item>Checkout</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="mt-4">
        <p className="text-4xl font-bold">Checkout</p>
        <p className="text-gray-400 text-sm">
          There are 3 products in your cart
        </p>
      </div>
      {/* mobile */}
      <div className="md:hidden flex my-4">
        <div className="border w-full rounded-lg">
          <div className="border-b rounded-t-lg bg-gray-300 p-4">
            <p>Product</p>
          </div>
          <div className="p-4">
            <div className="gap-4 flex items-center border-b py-2">
              <img
                className="w-12 h-12 rounded-md object-cover"
                src="https://s3-alpha-sig.figma.com/img/65be/dc9e/ea7a043cf57c3b98841d6e1786c8c01a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HUA6Q2DfUbyOunwdBiGTc1GRWgAUPtZ5U6oMoGskrR2kkq2sYBUrEhOlYhZavVWpAHiEml4uppQRP7B3ZudC12XadzRxzzUUxejfMBua916FpFccbjK6JXfOiDXg2REuI5NykwOg0gJnqUgGHSXc2wxpl-STyzQA7NJS38e0IdQz1Ka1WgO1D0Et6bABy5N6ARqZVkVapwRZ25qEhPk43R3e6Ty4QOum6PhKE-7lLc0s-Ztg9g2Jm99PFvrXpx5tWrt4-Y4CJZci6NlL7ytzpmqB69tSMKK1XuneFcOURii2XrR57n-yLZrxJn1Il3SvcqJTqyCSBP6SiR7nhl8~ZQ__"
                alt=""
              />
              <div className="flex-col">
                <p className="font-semibold">Hollo</p>
                <div className="flex items-center gap-2 text-[12px] text-gray-400">
                  <p>Pommah</p>
                  <p>3XL</p>
                  <p>815 TMT</p>
                </div>
                <div className="flex gap-4 mt-2 items-center">
                  <p className="font-bold">815 TMT</p>
                  <Button.Group className="flex">
                    <Button
                      size="xs"
                      color="gray"
                      className="flex items-center"
                    >
                      <FiMinus />
                    </Button>
                    <Button
                      size="xs"
                      color="gray"
                      className="px-2 flex items-center"
                    >
                      1
                    </Button>
                    <Button
                      size="xs"
                      color="gray"
                      className="flex items-center"
                    >
                      <FiPlus />
                    </Button>
                  </Button.Group>
                </div>
                <p className="text-[12px] text-blue-500 flex">Remove</p>
              </div>
            </div>
            <div className="gap-4 flex items-center border-b py-2">
              <img
                className="w-12 h-12 rounded-md object-cover"
                src="https://s3-alpha-sig.figma.com/img/65be/dc9e/ea7a043cf57c3b98841d6e1786c8c01a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HUA6Q2DfUbyOunwdBiGTc1GRWgAUPtZ5U6oMoGskrR2kkq2sYBUrEhOlYhZavVWpAHiEml4uppQRP7B3ZudC12XadzRxzzUUxejfMBua916FpFccbjK6JXfOiDXg2REuI5NykwOg0gJnqUgGHSXc2wxpl-STyzQA7NJS38e0IdQz1Ka1WgO1D0Et6bABy5N6ARqZVkVapwRZ25qEhPk43R3e6Ty4QOum6PhKE-7lLc0s-Ztg9g2Jm99PFvrXpx5tWrt4-Y4CJZci6NlL7ytzpmqB69tSMKK1XuneFcOURii2XrR57n-yLZrxJn1Il3SvcqJTqyCSBP6SiR7nhl8~ZQ__"
                alt=""
              />
              <div className="flex-col">
                <p className="font-semibold">Hollo</p>
                <div className="flex items-center gap-2 text-[12px] text-gray-400">
                  <p>Pommah</p>
                  <p>3XL</p>
                  <p>815 TMT</p>
                </div>
                <div className="flex gap-4 mt-2 items-center">
                  <p className="font-bold">815 TMT</p>
                  <Button.Group className="flex">
                    <Button
                      size="xs"
                      color="gray"
                      className="flex items-center"
                    >
                      <FiMinus />
                    </Button>
                    <Button
                      size="xs"
                      color="gray"
                      className="px-2 flex items-center"
                    >
                      1
                    </Button>
                    <Button
                      size="xs"
                      color="gray"
                      className="flex items-center"
                    >
                      <FiPlus />
                    </Button>
                  </Button.Group>
                </div>
                <p className="text-[12px] text-blue-500 flex">Remove</p>
              </div>
            </div>
          </div>
          <div className="px-4 border-b pb-4">
            <Button size="md" className="w-full">
              Checkout
            </Button>
          </div>
          <div className="p-4 space-y-2">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="font-bold">1325 TMT</p>
            </div>
            <div className="flex justify-between text-red-500">
              <p>Discount (-)</p>
              <p className="font-bold">1325 TMT</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Total Poyable</p>
              <p className="font-bold">1325 TMT</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 mt-4 gap-8 ">
        <div className=" col-span-1">
          <p className="font-bold text-xl">Billing Details</p>
          <form className="mt-4">
            <div className="grid grid-cols-2 gap-4">
              <TextInput
                id="firstName"
                type="text"
                placeholder="First name*"
                className="bg-white"
                required
              />
              <TextInput
                id="lastName"
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
            <Textarea
              id="address"
              placeholder="Your address is empty..."
              required
              rows={4}
              className="mt-4"
            />
            <Button type="submit" className="mt-2 px-4">
              Add address
            </Button>
          </form>
          <hr className="mt-4" />
          <div className="my-4">
            <List className="text-sm text-black">
              <List.Item>
                Eltip bermek hyzmaty Aşgabat şäheriniň çägi bilen bir hatarda
                Büzmeýine we Änew şäherine hem elýeterlidir;
              </List.Item>
              <List.Item>
                Sargydyň iň pes çägi 50 manat bolmaly; 50-150 manat arasy eltip
                bermek hyzmatynyň tölegi 10 manat; sargydyňyz 150 manatdan geçse
                eltip bermek hyzmaty mugt;
              </List.Item>
              <List.Item>
                Saýtdan sargyt edeniňizden soňra operator size jaň edip sargydy
                tassyklar (eger hemişelik müşderi bolsaňyz sargytlaryňyz
                islegiňize görä awtomatik usulda hem tassyklanýar);
              </List.Item>
              <List.Item>
                Sargydy barlap alanyňyzdan soňra töleg amala aşyrylýar. Eltip
                berijiniň size gowşurýan töleg resminamasynda siziň tölemeli
                puluňyz bellenendir. Töleg nagt görnüşde milli manatda amala
                aşyrylýar. Kabul edip tölegini geçiren harydyňyz yzyna
                alynmaýar.
              </List.Item>
            </List>
          </div>
        </div>
        <div className=" col-span-1 hidden md:flex-col md:flex">
          <p className="font-bold text-xl">Your order</p>
          <div className="mt-4">
            <div className="overflow-x-auto rounded-lg border">
              <Table hoverable className="text-black">
                <Table.Head className="text-bold ">
                  <Table.HeadCell>Product</Table.HeadCell>
                  <Table.HeadCell>Number</Table.HeadCell>
                  <Table.HeadCell>Subtotal</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white">
                    <Table.Cell>
                      <div className="gap-4 flex items-center">
                        <img
                          className="w-8 h-8 rounded-md object-cover"
                          src="https://s3-alpha-sig.figma.com/img/65be/dc9e/ea7a043cf57c3b98841d6e1786c8c01a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HUA6Q2DfUbyOunwdBiGTc1GRWgAUPtZ5U6oMoGskrR2kkq2sYBUrEhOlYhZavVWpAHiEml4uppQRP7B3ZudC12XadzRxzzUUxejfMBua916FpFccbjK6JXfOiDXg2REuI5NykwOg0gJnqUgGHSXc2wxpl-STyzQA7NJS38e0IdQz1Ka1WgO1D0Et6bABy5N6ARqZVkVapwRZ25qEhPk43R3e6Ty4QOum6PhKE-7lLc0s-Ztg9g2Jm99PFvrXpx5tWrt4-Y4CJZci6NlL7ytzpmqB69tSMKK1XuneFcOURii2XrR57n-yLZrxJn1Il3SvcqJTqyCSBP6SiR7nhl8~ZQ__"
                          alt=""
                        />
                        <div className="flex-col">
                          <p className="font-semibold">Hollo</p>
                          <div className="flex items-center gap-2 text-[12px] text-gray-400">
                            <p>Pommah</p>
                            <p>3XL</p>
                            <p>815 TMT</p>
                          </div>
                        </div>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex-col items-center">
                        <Button.Group className="flex">
                          <Button
                            size="xs"
                            color="gray"
                            className="flex items-center"
                          >
                            <FiMinus />
                          </Button>
                          <Button
                            size="xs"
                            color="gray"
                            className="px-2 flex items-center"
                          >
                            1
                          </Button>
                          <Button
                            size="xs"
                            color="gray"
                            className="flex items-center"
                          >
                            <FiPlus />
                          </Button>
                        </Button.Group>
                        <p className="text-[12px] text-blue-500 flex justify-end">
                          Remove
                        </p>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <p className="font-bold">815 TMT</p>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white">
                    <Table.Cell>
                      <div className="gap-4 flex items-center">
                        <img
                          className="w-8 h-8 rounded-md object-cover"
                          src="https://s3-alpha-sig.figma.com/img/65be/dc9e/ea7a043cf57c3b98841d6e1786c8c01a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HUA6Q2DfUbyOunwdBiGTc1GRWgAUPtZ5U6oMoGskrR2kkq2sYBUrEhOlYhZavVWpAHiEml4uppQRP7B3ZudC12XadzRxzzUUxejfMBua916FpFccbjK6JXfOiDXg2REuI5NykwOg0gJnqUgGHSXc2wxpl-STyzQA7NJS38e0IdQz1Ka1WgO1D0Et6bABy5N6ARqZVkVapwRZ25qEhPk43R3e6Ty4QOum6PhKE-7lLc0s-Ztg9g2Jm99PFvrXpx5tWrt4-Y4CJZci6NlL7ytzpmqB69tSMKK1XuneFcOURii2XrR57n-yLZrxJn1Il3SvcqJTqyCSBP6SiR7nhl8~ZQ__"
                          alt=""
                        />
                        <div className="flex-col">
                          <p className="font-semibold">Hollo</p>
                          <div className="flex items-center gap-2 text-[12px] text-gray-400">
                            <p>Pommah</p>
                            <p>3XL</p>
                            <p>815 TMT</p>
                          </div>
                        </div>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex-col items-center">
                        <Button.Group className="flex">
                          <Button
                            size="xs"
                            color="gray"
                            className="flex items-center"
                          >
                            <FiMinus />
                          </Button>
                          <Button
                            size="xs"
                            color="gray"
                            className="px-2 flex items-center"
                          >
                            1
                          </Button>
                          <Button
                            size="xs"
                            color="gray"
                            className="flex items-center"
                          >
                            <FiPlus />
                          </Button>
                        </Button.Group>
                        <p className="text-[12px] text-blue-500 flex justify-end">
                          Remove
                        </p>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <p className="font-bold">815 TMT</p>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white">
                    <Table.Cell>
                      <p className="font-semibold">Total poyable</p>
                    </Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>
                      <p className="font-bold">815 TMT</p>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
            <Button size="md" className="mt-12 w-full">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

import { Breadcrumb } from "flowbite-react";

export const SingleBlog = () => {
  return (
    <>
      <div>
        <Breadcrumb aria-label="Default breadcrumb example" className="mt-4">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item>Blog</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="md:px-36 my-8">
        <div>
          <p className="text-sm text-gray-400">18 August 2023</p>
          <p className="text-2xl font-bold mt-4">Nike Sportswear Futura Luxe</p>
          <img
            className="w-full object-cover h-96 mt-4"
            src="https://s3-alpha-sig.figma.com/img/6b2b/41b5/309b13dcb4d842015fdc7f6436b3095f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OcAQMF4TkKZDMVDjZ0ahCtFJh4ktURE9UBkbo3PbV7MqNo8VweWqWCZ6d6KdyekHCCbPW4bN91ZWASBMfrwwEvffcuLWc~hJK6oI~8MT2Qx3jjvEYpEka4Ul4FqYCUpnVAhoZvbridPyDxaGhpbDk0NisK-6Hq7Rk8yTl~AmYRC0IqrstupRFGq53~MLCv0EujQ2bZ6kmbdYFRQq83-jYSPbf17r6MM8QSyCcZ77uI4nduJsyec4YSqjDJGRxDHdUnSswyfBRSYNoG139tq2nERaaah2FnneMk6pJLUPrIHwhNPHwTs2zTzTwB4XIrZqEMbTMhmImrNw88ciEHYWyA__"
            alt=""
          />
          <div className="mt-4 space-y-4">
            <p className="text-sm">
              Lorem ipsum dolor sit amet, in eos melius bonorum molestiae, eos
              an deleniti constituam. Hell homero scriptorem usu. Et yauem
              soluta vulputate eam, vih ad probatus partiendo assueverit. Mei at
              sapientem eloyauentiam. In vih scribentur instructior. <br /><br />{" "}
              Volumus adipisci disputationi atnets, with error malorum ne.
              Delitsata ekhplitsari prodesset mel te, vivendum similiyaue
              scriptorem en us, usu aczomodare contentiones id. Sit zu region
              facilisi. Aeyaue graetso ne vih, tota latine constsettuer ea vel,
              sit aliyauip tratstatos ad. <br /> <br /> Adhutz voluptaria appellantur
              no mei, saperet voluptua ad duo. Nam ut yauem veniam homero.
              Dotsendi epicurei suavitate duo ex, zu pro ferri tratstatos. Usu
              tale nostrud molestiae an, et vim timeam persius democritum.
            </p>
            <div className="border-l-4 border-black px-4 py-1 mt-4">
              <p className="text-sm">
                Eu eum odio erant aperiam. Ei modus similiyaue pri, oporteat
                tsomplectitur necessitatibus yaui ut. Putant intellegebat in us,
                vih ei etiam partem noluisse. Ea eos justo facilisis percipitur,
                at debitis placerat mediocritatem pro. Et aczusata consulata
                sea.
              </p>
            </div>
            <p className="text-sm">
              Dicit dolores indoctum ne sit, ea sed region euismod periculis, ex
              aliyahuam blandit rationibus usu. Adhuts soluta pertinah vela
              hell, iisyaue nostrud ditseret et pro, tsum brute choro veniam te.
              Libris errorribus en nec, ius ex yahuando contentiones
              intellegebat. Delectus pertinach euripidis no duo, feugiat veritus
              id vih, ludus yahuando lucilius has id. Tempor epitsuri te eum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

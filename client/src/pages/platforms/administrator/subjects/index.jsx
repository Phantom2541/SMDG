import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Card from "./card";
import { MDBBtn, MDBIcon } from "mdbreact";
import Modal from "./modal";
import Swal from "sweetalert2";

const collections = [
  {
    _id: "1",
    title: "Introduction to Programming",
    units: 2,
    description:
      "This course provides a comprehensive introduction to programming concepts and practices. Students will learn the fundamentals of writing code, solving problems, and designing algorithms. Topics include variables, control structures, functions, and an overview of different programming languages. The course aims to equip students with the foundational skills necessary for further studies in computer science.",
    isMajor: false,
    lab: 0,
    lec: 0,
  },
  {
    _id: "2",
    title: "Mathematics for Computer Science",
    units: 5,
    description:
      "This course is designed to strengthen students' mathematical foundation for computer science. It covers a wide range of mathematical topics including algebra, calculus, discrete mathematics, and logic. Emphasis is placed on the application of mathematical concepts to solving computational problems. The course is a fundamental prerequisite for advanced computer science courses.",
    isMajor: true,
    lab: 1,
    lec: 2,
  },
  {
    _id: "3",
    title: "Web Development Fundamentals",
    units: 2,
    description:
      "In this course, students will delve into the fundamental concepts of web development. Topics include HTML, CSS, and JavaScript, with an emphasis on creating dynamic and interactive web pages. Students will gain practical experience by working on hands-on projects that cover the essentials of front-end web development. No prior coding experience is required.",
    isMajor: false,
    lab: 0,
    lec: 0,
  },
  {
    _id: "4",
    title: "Data Structures and Algorithms",
    units: 5,
    description:
      "This course explores fundamental data structures and algorithms used in computer science. Topics include arrays, linked lists, stacks, queues, trees, and sorting algorithms. Students will analyze the efficiency of algorithms and learn how to choose the appropriate data structure for solving specific problems. The course is essential for developing strong problem-solving skills.",
    isMajor: true,
    lab: 2,
    lec: 3,
  },
  {
    _id: "5",
    title: "Digital Logic Design",
    units: 3,
    description:
      "Digital Logic Design is a foundational course that introduces students to the principles of digital circuits. Topics include Boolean algebra, logic gates, combinational and sequential circuits. Students will gain hands-on experience in designing and implementing digital circuits using simulation tools. The knowledge gained in this course is crucial for understanding computer architecture.",
    isMajor: false,
    lab: 0,
    lec: 0,
  },
  {
    _id: "6",
    title: "Operating Systems",
    units: 4,
    description:
      "Operating Systems is a core course that covers the principles and functions of operating systems. Topics include process management, memory management, file systems, and security. Students will gain practical experience by working with different operating systems and understanding their role in managing computer resources.",
    isMajor: true,
    lab: 2,
    lec: 2,
  },
  {
    _id: "7",
    title: "Introduction to Artificial Intelligence",
    units: 4,
    description:
      "This course provides an introduction to the exciting field of Artificial Intelligence (AI). Students will explore foundational concepts such as machine learning, natural language processing, and computer vision. Practical applications of AI in various industries will be discussed, and students will have the opportunity to work on AI projects.",
    isMajor: true,
    lab: 2,
    lec: 2,
  },
  {
    _id: "8",
    title: "Database Management Systems",
    units: 4,
    description:
      "Database Management Systems is a comprehensive course that covers the design and implementation of database systems. Topics include relational database models, SQL, normalization, and transaction management. Students will gain hands-on experience by working on database projects that address real-world scenarios.",
    isMajor: true,
    lab: 2,
    lec: 2,
  },
  {
    _id: "9",
    title: "Computer Networks",
    units: 4,
    description:
      "Computer Networks explores the fundamental principles of computer network architectures. Topics include networking protocols, data transmission, network security, and the design of scalable and reliable networks. The course combines theoretical knowledge with practical applications, allowing students to build and troubleshoot computer networks.",
    isMajor: true,
    lab: 2,
    lec: 2,
  },
  {
    _id: "10",
    title: "Software Engineering",
    units: 3,
    description:
      "Software Engineering is a critical course that focuses on the principles and practices of software development. Topics include software life cycle models, requirements engineering, design patterns, and testing. Students will collaborate on a software project to apply the concepts learned throughout the course.",
    isMajor: true,
    lab: 1,
    lec: 2,
  },
  {
    _id: "11",
    title: "Human-Computer Interaction",
    units: 3,
    description:
      "Human-Computer Interaction (HCI) explores the relationship between humans and computers. Topics include user interface design, usability testing, and interaction design principles. Students will learn how to create user-friendly interfaces and conduct evaluations to improve the overall user experience.",
    isMajor: true,
    lab: 1,
    lec: 2,
  },
  {
    _id: "12",
    title: "Cryptography",
    units: 3,
    description:
      "Cryptography is an introductory course that covers the principles of securing information through cryptographic techniques. Topics include encryption algorithms, public-key cryptography, and cryptographic protocols. Students will explore the applications of cryptography in ensuring data confidentiality and integrity.",
    isMajor: false,
    lab: 0,
    lec: 0,
  },
  {
    _id: "13",
    title: "Computer Graphics",
    units: 4,
    description:
      "Computer Graphics is an advanced course that explores the principles of creating and manipulating visual images. Topics include 2D and 3D graphics, rendering techniques, and computer animation. Students will have the opportunity to work on projects that involve creating realistic and interactive computer-generated graphics.",
    isMajor: true,
    lab: 2,
    lec: 2,
  },
  {
    _id: "14",
    title: "Network Security",
    units: 4,
    description:
      "Network Security is a crucial course that focuses on securing computer networks from unauthorized access and attacks. Topics include cryptography, firewalls, intrusion detection systems, and secure protocols. Students will gain practical skills in identifying and mitigating network security threats.",
    isMajor: true,
    lab: 2,
    lec: 2,
  },
  {
    _id: "15",
    title: "Mobile App Development",
    units: 3,
    description:
      "Mobile App Development introduces students to the principles and practices of developing applications for mobile platforms. Topics include mobile app architecture, user interface design, and platform-specific development. Students will create and deploy mobile apps for various devices.",
    isMajor: false,
    lab: 0,
    lec: 0,
  },
];

export default function Subjects() {
  const [show, setShow] = useState(false),
    [subjects, setSubjects] = useState([]),
    [didSearch, setDidSearch] = useState(false);

  useEffect(() => {
    setSubjects(collections);
  }, []);

  const handleDelete = (_id) =>
    Swal.fire({
      focusDeny: true,
      icon: "question",
      title: "Are you sure?",
      text: "This action is irreversible.",
      confirmButtonText: `<span class="text-dark">Cancel</span>`,
      confirmButtonColor: "#fff",

      showDenyButton: true,
      denyButtonText: `Proceed`,
      denyButtonColor: "#3B71CA",
    }).then((res) => {
      if (res.isDenied) {
        console.log("deleted", _id);
      } else {
        Swal.fire({
          title: "Changes are not Saved!",
          icon: "warning",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
        });
      }
    });

  const handleSearch = (e) => {
    e.preventDefault();

    const key = e.target.searchKey.value.toUpperCase();

    setSubjects(
      collections.filter(({ title }) => title.toUpperCase().includes(key))
    );

    setDidSearch(true);
  };

  return (
    <div className="md-accordion">
      <Modal show={show} toggle={() => setShow(false)} />
      <h4 className="text-left font-weight-bold dark-grey-text mb-0 d-flex justify-content-between align-items-center">
        <>Subjects</>
        <form
          id="subject-inline-search"
          onSubmit={handleSearch}
          className="form-inline ml-2"
        >
          <div className="form-group md-form py-0 mt-0">
            <input
              className="form-control w-80"
              type="text"
              placeholder="Title Search..."
              name="searchKey"
              required
            />
            <MDBBtn
              onClick={() => {
                if (!didSearch) return;

                setDidSearch(false);
                document.getElementById("subject-inline-search").reset();
                setSubjects(collections);
              }}
              type={didSearch ? "button" : "submit"}
              size="sm"
              color="info"
              className="d-inline ml-2 px-2"
            >
              <MDBIcon icon={didSearch ? "times" : "search"} />
            </MDBBtn>
            <MDBBtn
              type="button"
              size="sm"
              color="primary"
              className="d-inline  px-2"
              onClick={() => setShow(true)}
              title="Create a Subject"
            >
              <MDBIcon icon="plus" />
            </MDBBtn>
          </div>
        </form>
      </h4>
      <hr />
      {/* <div className="text-center mt-5"> */}
      {/* <div className="alert alert-info">Records are empty</div> */}
      {/* <MDBSpinner /> */}
      {/* </div> */}

      <ResponsiveMasonry columnsCountBreakPoints={{ 800: 1, 900: 2, 1200: 3 }}>
        <Masonry style={{ gap: "15px" }}>
          {subjects.map((subject) => (
            <Card
              key={subject._id}
              subject={subject}
              handleDelete={handleDelete}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

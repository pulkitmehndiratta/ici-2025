import map from "../assets/svg/map-icon.svg";
import speaker from "../assets/svg/speaker-icon.svg";
const ConferenceInfo = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-gray-800 text-white py-12">
        {/* Marquee */}
        <div className="text-center py-2">
          <marquee className="bg-gray-700 p-2">
            ICI-2023 Conference will be held in Online Mode only
          </marquee>
        </div>
        <div className="h-[7vh]"></div>

        {/* Divider */}
        <div className="flex justify-center mb-12">
          <div className="w-5/12 lg:w-1/4">
            <hr className="border-gray-600" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap -mx-4 z-10 relative">
          <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
            <div className="flex items-center">
              <img
                className="w-16 h-16 mr-4"
                src={map}
                alt="Location Icon"
              />
              <div>
                <h2 className="text-xl font-bold mb-2">Location</h2>
                <p>
                  Jaypee Institute of Information Technology, A-10, Sector 62
                  Noida-201309, Uttar Pradesh, India.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
            <div className="flex items-center">
              <img
                className="w-16 h-16 mr-4"
                src={speaker}
                alt="Speaker Icon"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Important Dates</h3>
                <p>
                  Conference dates: 23-25 November 2023
                  <br />
                  Full Paper Submission: 31<sup>st</sup> August, 2023
                  <br />
                  Author Notification: 20<sup>th</sup> October, 2023
                  <br />
                  Final Paper Submission: 30<sup>th</sup> October, 2023
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
            <div className="flex items-center">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Technical Sponsorship
                </h3>
                <p>IEEE U.P. Section</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8" id="about">
          About
        </h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <p className="text-gray-800 leading-relaxed">
              The Department of Computer Science & Engineering and Information
              Technology is a leading department of Jaypee Institute of
              Information Technology (JIIT), Noida which is a UGC approved,
              AICTE approved, NAAC accredited & NIRF ranked Deemed to be
              University. JIIT stands among top 100 leading institutions in the
              country as per NIRF ranking. It thrives to be a centre of
              excellence in evolving key areas of computing & IT; like
              artificial intelligence and machine learning, cloud computing, big
              data, Internet of Things (IoT) etc. The department offers a
              comprehensive selection of undergraduate, graduate, and doctoral
              academic programmes. The department with its strong and dedicated
              team of faculty members and under the leadership & vision of very
              reputed & dedicated visionaries, always aims to provide high
              quality education and nurture future leaders in the field of IT
              professionals, researchers and entrepreneurs.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <p className="text-gray-800 leading-relaxed">
              JIIT aspires to gain recognition on a global scale for the calibre
              of its creative and research initiatives, as well as their
              relevance to enhancing quality of life, producing novel insights,
              and extending the frontiers of human knowledge. The 2023 Second
              International Conference on Informatics (ICI) aims to provide a
              leading international forum for researchers, scientists, and
              industry professionals who are working on next generation
              informatics. The conference will give a platform to showcase
              methodological and technological advancements in emerging areas of
              Big Data, AI & Machine learning, Blockchain and Cloud Technology,
              IOT and smart systems etc. ICI-2023 will be conducted in online
              mode. The authors of accepted papers will have to present their
              papers online only.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConferenceInfo;

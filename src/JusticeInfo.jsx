import dotenv from 'dotenv'
dotenv.config()

const JusticeInfo = {
  api_key: process.env.REACT_APP_TMDB_API_KEY,
  justices: [
    {
      "id": 346364,
        "title": "John G. Roberts, Jr.",
        "poster_path": "/Roberts_8807-16_Crop.jpg",
        "backdrop_path": "/cnnnext/dam/assets/190308143109-12-john-roberts-gallery-super-169.jpg",
        "overview": "was born in Buffalo, New York, January 27, 1955. He married Jane Marie Sullivan in 1996 and they have two children - Josephine and Jack. He received an A.B. from Harvard College in 1976 and a J.D. from Harvard Law School in 1979. He served as a law clerk for Judge Henry J. Friendly of the United States Court of Appeals for the Second Circuit from 1979–1980 and as a law clerk for then-Associate Justice William H. Rehnquist of the Supreme Court of the United States during the 1980 Term. He was Special Assistant to the Attorney General, U.S. Department of Justice from 1981–1982, Associate Counsel to President Ronald Reagan, White House Counsel’s Office from 1982–1986, and Principal Deputy Solicitor General, U.S. Department of Justice from 1989–1993. From 1986–1989 and 1993–2003, he practiced law in Washington, D.C. He was appointed to the United States Court of Appeals for the District of Columbia Circuit in 2003. President George W. Bush nominated him as Chief Justice of the United States, and he took his seat September 29, 2005.",
        "release_date": "2017-09-05"
    },
    {
      "id": 343668,
        "title": "Clarence Thomas",
        "poster_path": "/Thomas_9366-024_Crop.jpg",
        "backdrop_path": "/cnnnext/dam/assets/161020132328-clarence-thomas-super-169.jpg",
        "overview": "was born in the Pinpoint community near Savannah, Georgia on June 23, 1948. He attended Conception Seminary from 1967-1968 and received an A.B., cum laude, from College of the Holy Cross in 1971 and a J.D. from Yale Law School in 1974. He was admitted to law practice in Missouri in 1974, and served as an Assistant Attorney General of Missouri, 1974-1977; an attorney with the Monsanto Company, 1977-1979; and Legislative Assistant to Senator John Danforth, 1979-1981. From 1981–1982 he served as Assistant Secretary for Civil Rights, U.S. Department of Education, and as Chairman of the U.S. Equal Employment Opportunity Commission, 1982-1990. From 1990–1991, he served as a Judge on the United States Court of Appeals for the District of Columbia Circuit. President Bush nominated him as an Associate Justice of the Supreme Court and he took his seat October 23, 1991. He married Virginia Lamp on May 30, 1987 and has one child, Jamal Adeen by a previous marriage.",
        "release_date": "2017-09-20"
    },
    {
      "id": 339403,
        "title": "Stephen G. Breyer",
        "poster_path": "/Breyer_8664-13-Crop.jpg",
        "backdrop_path": "/cnnnext/dam/assets/120517164648-associate-justice-stephen-breyer-large-169.jpg",
        "overview": "was born in San Francisco, California, August 15, 1938. He married Joanna Hare in 1967, and has three children - Chloe, Nell, and Michael. He received an A.B. from Stanford University, a B.A. from Magdalen College, Oxford, and an LL.B. from Harvard Law School. He served as a law clerk to Justice Arthur Goldberg of the Supreme Court of the United States during the 1964 Term, as a Special Assistant to the Assistant U.S. Attorney General for Antitrust, 1965–1967, as an Assistant Special Prosecutor of the Watergate Special Prosecution Force, 1973, as Special Counsel of the U.S. Senate Judiciary Committee, 1974–1975, and as Chief Counsel of the committee, 1979–1980. He was an Assistant Professor, Professor of Law, and Lecturer at Harvard Law School, 1967–1994, a Professor at the Harvard University Kennedy School of Government, 1977–1980, and a Visiting Professor at the College of Law, Sydney, Australia and at the University of Rome. From 1980–1990, he served as a Judge of the United States Court of Appeals for the First Circuit, and as its Chief Judge, 1990–1994. He also served as a member of the Judicial Conference of the United States, 1990–1994, and of the United States Sentencing Commission, 1985–1989. President Clinton nominated him as an Associate Justice of the Supreme Court, and he took his seat August 3, 1994.",
        "release_date": "2017-06-28"
    },
    {
        "id": 335984,
        "title": "Samuel A. Alito",
        "poster_path": "/Alito_9264-001-Crop.jpg",
        "backdrop_path": "/zfWPeRgYpRjPZLGwwkfnTfaFnNh.jpg",
        "overview": "was born in Trenton, New Jersey, April 1, 1950. He married Martha-Ann Bomgardner in 1985, and has two children - Philip and Laura. He served as a law clerk for Leonard I. Garth of the United States Court of Appeals for the Third Circuit from 1976–1977. He was Assistant U.S. Attorney, District of New Jersey, 1977–1981, Assistant to the Solicitor General, U.S. Department of Justice, 1981–1985, Deputy Assistant Attorney General, U.S. Department of Justice, 1985–1987, and U.S. Attorney, District of New Jersey, 1987–1990. He was appointed to the United States Court of Appeals for the Third Circuit in 1990. President George W. Bush nominated him as an Associate Justice of the Supreme Court, and he took his seat January 31, 2006.",
        "release_date": "2017-10-04"
    },
    {
      "id": 381283,
        "title": "Sonia Sotomayor",
        "poster_path": "/Sotomayor_9841-001-Crop.jpg",
        "backdrop_path": "/cnnnext/dam/assets/160308124902-sonia-sotomayor-2009-super-tease.jpg",
        "overview": "was born in Bronx, New York, on June 25, 1954. She earned a B.A. in 1976 from Princeton University, graduating summa cum laude and receiving the university’s highest academic honor. In 1979, she earned a J.D. from Yale Law School where she served as an editor of the Yale Law Journal. She served as Assistant District Attorney in the New York County District Attorney’s Office from 1979–1984. She then litigated international commercial matters in New York City at Pavia & Harcourt, where she served as an associate and then partner from 1984–1992. In 1991, President George H.W. Bush nominated her to the U.S. District Court, Southern District of New York, and she served in that role from 1992–1998. She served as a judge on the United States Court of Appeals for the Second Circuit from 1998–2009. President Barack Obama nominated her as an Associate Justice of the Supreme Court on May 26, 2009, and she assumed this role August 8, 2009.",
        "release_date": "2017-09-13"
    },
    {
      "id": 374720,
        "title": "Elena Kagan",
        "poster_path": "/Kagan_10713-017-Crop.jpg",
        "backdrop_path": "/cnnnext/dam/assets/180725151541-elena-kagan-scotus-0725-large-169.jpg",
        "overview": "was born in New York, New York, on April 28, 1960. She received an A.B. from Princeton in 1981, an M. Phil. from Oxford in 1983, and a J.D. from Harvard Law School in 1986. She clerked for Judge Abner Mikva of the U.S. Court of Appeals for the D.C. Circuit from 1986-1987 and for Justice Thurgood Marshall of the U.S. Supreme Court during the 1987 Term. After briefly practicing law at a Washington, D.C. law firm, she became a law professor, first at the University of Chicago Law School and later at Harvard Law School. She also served for four years in the Clinton Administration, as Associate Counsel to the President and then as Deputy Assistant to the President for Domestic Policy. Between 2003 and 2009, she served as the Dean of Harvard Law School. In 2009, President Obama nominated her as the Solicitor General of the United States. A year later, the President nominated her as an Associate Justice of the Supreme Court on May 10, 2010. She took her seat on August 7, 2010.",
        "release_date": "2017-07-19"
    },
    {
      "id": 415842,
        "title": "Neil M. Gorsuch",
        "poster_path": "/Gorsuch2.jpg",
        "backdrop_path": "/cnnnext/dam/assets/170321102527-neil-gorsuch-testifies-before-senate-judiciary-committee-on-march-21-2017-exlarge-169.jpg",
        "overview": "was born in Denver, Colorado, August 29, 1967. He and his wife Louise have two daughters. He received a B.A. from Columbia University, a J.D. from Harvard Law School, and a D.Phil. from Oxford University. He served as a law clerk to Judge David B. Sentelle of the United States Court of Appeals for the District of Columbia Circuit, and as a law clerk to Justice Byron White and Justice Anthony M. Kennedy of the Supreme Court of the United States. From 1995–2005, he was in private practice, and from 2005–2006 he was Principal Deputy Associate Attorney General at the U.S. Department of Justice. He was appointed to the United States Court of Appeals for the Tenth Circuit in 2006. He served on the Standing Committee on Rules for Practice and Procedure of the U.S. Judicial Conference, and as chairman of the Advisory Committee on Rules of Appellate Procedure. He taught at the University of Colorado Law School. President Donald J. Trump nominated him as an Associate Justice of the Supreme Court, and he took his seat on April 10, 2017.",
        "release_date": "2017-09-14"
    },
    {
      "id": 390043,
        "title": "Brett M. Kavanaugh",
        "poster_path": "/Kavanaugh%2012221_005_crop.jpg",
        "backdrop_path": "/cnnnext/dam/assets/180927165153-17-kavanaugh-senate-hearing-0927-large-169.jpg",
        "overview": "was born in Washington, D.C., on February 12, 1965. He married Ashley Estes in 2004, and they have two daughters - Margaret and Liza. He received a B.A. from Yale College in 1987 and a J.D. from Yale Law School in 1990. He served as a law clerk for Judge Walter Stapleton of the U.S. Court of Appeals for the Third Circuit from 1990-1991, for Judge Alex Kozinski of the U.S. Court of Appeals for the Ninth Circuit from 1991-1992, and for Justice Anthony M. Kennedy of the U.S. Supreme Court during the 1993 Term. In 1992-1993, he was an attorney in the Office of the Solicitor General of the United States. From 1994 to 1997 and for a period in 1998, he was Associate Counsel in the Office of Independent Counsel. He was a partner at a Washington, D.C., law firm from 1997 to 1998 and again from 1999 to 2001. From 2001 to 2003, he was Associate Counsel and then Senior Associate Counsel to President George W. Bush. From 2003 to 2006, he was Assistant to the President and Staff Secretary for President Bush. He was appointed a Judge of the United States Court of Appeals for the District of Columbia Circuit in 2006. President Donald J. Trump nominated him as an Associate Justice of the Supreme Court, and he took his seat on October 6, 2018.",
        "release_date": "2017-08-16"
    },
    {
      "id": 390044,
        "title": "Amy Coney Barrett",
        "poster_path": "",
        "backdrop_path": "/cnnnext/dam/assets/201026213314-09-wh-barrett-sworn-in-1026-exlarge-169.jpg",
        "overview": "",
        "release_date": "2017-08-16"
    }
  ]
}

export default JusticeInfo;
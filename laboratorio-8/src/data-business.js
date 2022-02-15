function getClients() {
  return [
    {
      id: 1,
      avatar: "https://robohash.org/harumundedeleniti.jpg?size=50x50&set=set1",
      first_name: "Javier",
      last_name: "Lamey",
      email: "jlamey0@discuz.net",
    },
    {
      id: 2,
      avatar:
        "https://robohash.org/fugitvoluptatesenim.png?size=50x50&set=set1",
      first_name: "Crin",
      last_name: "Siberry",
      email: "csiberry1@lycos.com",
    },
    {
      id: 3,
      avatar: "https://robohash.org/quodquidemvero.jpg?size=50x50&set=set1",
      first_name: "Belva",
      last_name: "Dumbleton",
      email: "bdumbleton2@bloomberg.com",
    },
    {
      id: 4,
      avatar: "https://robohash.org/evenietanimimaxime.jpg?size=50x50&set=set1",
      first_name: "Natal",
      last_name: "Achromov",
      email: "nachromov3@hatena.ne.jp",
    },
    {
      id: 5,
      avatar: "https://robohash.org/eositaqueexplicabo.bmp?size=50x50&set=set1",
      first_name: "Brandy",
      last_name: "Iwaszkiewicz",
      email: "biwaszkiewicz4@goodreads.com",
    },
    {
      id: 6,
      avatar:
        "https://robohash.org/veritatisaliasminima.jpg?size=50x50&set=set1",
      first_name: "Rudolfo",
      last_name: "Squelch",
      email: "rsquelch5@stanford.edu",
    },
    {
      id: 7,
      avatar:
        "https://robohash.org/asperioresomnissoluta.bmp?size=50x50&set=set1",
      first_name: "Aurelie",
      last_name: "Flye",
      email: "aflye6@amazon.de",
    },
    {
      id: 8,
      avatar:
        "https://robohash.org/veritatisfacereeligendi.png?size=50x50&set=set1",
      first_name: "Dollie",
      last_name: "Durdy",
      email: "ddurdy7@privacy.gov.au",
    },
    {
      id: 9,
      avatar: "https://robohash.org/molestiaeutaliquam.jpg?size=50x50&set=set1",
      first_name: "Sadie",
      last_name: "Carsey",
      email: "scarsey8@free.fr",
    },
    {
      id: 10,
      avatar: "https://robohash.org/asperioresdolorsit.png?size=50x50&set=set1",
      first_name: "Franny",
      last_name: "Breazeall",
      email: "fbreazeall9@msu.edu",
    },
  ];
}

function getAccounts() {
  return [
    {
      id: 1,
      clientId: 1,
      iban: "CZ93 1843 7812 7148 7249 2819",
      money: "-1345.10",
    },
    {
      id: 2,
      clientId: 1,
      iban: "FR39 8986 1940 69E5 IPIX 74QN G61",
      money: "-1418.10",
    },
    {
      id: 3,
      clientId: 2,
      iban: "TN31 0683 5990 1113 0051 7844",
      money: "23109.78",
    },
    {
      id: 4,
      clientId: 3,
      iban: "GB98 UTTC 8356 6258 9439 93",
      money: "15721.47",
    },
    {
      id: 5,
      clientId: 4,
      iban: "BG17 VAKO 7833 79Q7 HK7H K3",
      money: "24458.62",
    },
    {
      id: 6,
      clientId: 5,
      iban: "MU93 QUGI 8684 7689 7519 5635 274U LC",
      money: "23677.60",
    },
    {
      id: 7,
      clientId: 5,
      iban: "FR43 9528 3177 35O3 AC2V 6VNU V38",
      money: "11117.60",
    },
    {
      id: 8,
      clientId: 6,
      iban: "NL35 BLZT 2522 8993 25",
      money: "207.32",
    },
    {
      id: 9,
      clientId: 7,
      iban: "AZ25 TSQE CULI 0YGX AJK3 RCHX DSZ2",
      money: "23980.98",
    },
    {
      id: 10,
      clientId: 8,
      iban: "FR16 3581 3360 133P CCCZ EW3E A20",
      money: "15230.37",
    },
    {
      id: 11,
      clientId: 8,
      iban: "MK98 081B IAUU CTEF 308",
      money: "19166.62",
    },
    {
      id: 12,
      clientId: 8,
      iban: "LB91 1234 KKW8 W2EY 972B EXVO YKN0",
      money: "-2396.78",
    },
    {
      id: 13,
      clientId: 9,
      iban: "BG83 RKKJ 5762 9795 AH74 9Y",
      money: "11837.06",
    },
    {
      id: 14,
      clientId: 9,
      iban: "HU46 6405 3103 5188 8345 6947 6173",
      money: "-6081.25",
    },
    {
      id: 15,
      clientId: 10,
      iban: "FR59 2396 3586 44UT 2E5F DQAB P15",
      money: "24426.40",
    },
  ];
}

// ES6
// export { getClients, getAccounts };

// COMMON JS
module.exports = { getClients, getAccounts };

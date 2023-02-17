const data = [
  {
    id: 1,
    summary: "Accounts",
    content:
      "Odio deleniti perspiciatis enim nam exercitationem. Quidem cumque occaecati est error. Ipsam neque officia ipsam veritatis sed quibusdam sit. Est quis quaerat quia deserunt.",
  },
  {
    id: 2,
    summary: "one-to-one COM",
    content:
      "Facilis quod eveniet velit consequatur qui. Cupiditate tempora eligendi tempore modi. Omnis facere dignissimos quas consectetur. Blanditiis ipsa animi nobis doloribus qui voluptatibus iusto quasi.",
  },
  {
    id: 3,
    summary: "capacitor Sleek withdrawal",
    content:
      "Sed sint iste nesciunt. Quas facere velit expedita incidunt rem similique ipsam pariatur vel. Omnis dignissimos natus illum voluptatem.",
  },
  {
    id: 4,
    summary: "Utah index Re-engineered",
    content:
      "Voluptas earum beatae iusto soluta. Quaerat quia voluptatem sint exercitationem dolor rerum. Ratione et accusantium est aut. Enim magnam dignissimos. Eos in dolore pariatur.",
  },
  {
    id: 5,
    summary: "Shilling Switchable Account",
    content:
      "Debitis fugiat rem. Facere adipisci quos eius ratione vitae illo. Accusamus commodi quo ipsam quibusdam velit soluta. Labore a consequuntur. Laboriosam laudantium blanditiis eveniet excepturi et exercitationem rerum consequatur. Dolorum inventore libero et soluta voluptatum voluptatibus voluptatum enim ea.",
  },
  {
    id: 6,
    summary: "Corporate maroon ivory",
    content:
      "Suscipit quia est quaerat ipsa impedit. Cupiditate molestiae fugiat eius atque earum odio et dolor quos. Laudantium sint deleniti vel earum. Nostrum dolor eum. Est rem modi quis.",
  },
  {
    id: 7,
    summary: "Computers alarm payment",
    content:
      "Mollitia velit distinctio labore aut eos et. Sunt est unde veritatis sit dicta. Accusamus magni voluptatum aut.",
  },
  {
    id: 8,
    summary: "Account Berkshire",
    content:
      "Possimus repudiandae eligendi ullam consequatur est aut nostrum. Modi eum quo alias dolor ut sint aut quidem sapiente. Dolores velit eligendi labore quia voluptates consequatur. Sunt et earum aut rem praesentium distinctio voluptatem et. Minima et neque atque dolor nihil qui ut quasi similique. Voluptatem asperiores ut ratione.",
  },
  {
    id: 9,
    summary: "transmitting",
    content:
      "Eligendi dolore qui labore et eius quia ut occaecati nulla. Beatae suscipit aspernatur quam quae aliquid. Repellat vel aut voluptas est et iusto ea rem aperiam. Sapiente voluptatem reprehenderit officia natus.",
  },
];

export function Faq() {
  return (
    <div className="">
      <div className="">
        <h2 className="">FAQ</h2>
        <p className="">Frequenty asked questions</p>
      </div>
      <div className="">
        {data.map((d) => (
          <div key={d.id} className="">
            <details className="">
              <summary className="">
                <span>{d.summary}</span>
                <span className="">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="">{d.content}</p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";
import "./index.css";

function App() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className=" min-h-screen">
      <header className="">
        <div className="">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>

            <p>Workit</p>
          </span>
          {/* <!-- Small screens --> */}
          <div className="">
            <button type="button" className="" onClick={() => toggle()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* <!-- sm and up --> */}
          {/* <!-- <div className="">
        <a className="" href="#">Workouts</a>
        <a className="" href="#">Schedule</a>
        <a className="" href="#">Daily</a>
        <a className="" href="#">Contact</a>
      </div> --> */}
        </div>
      </header>
      <main>
        <div>
          <h1>WorkIt</h1>

          <div>
            <img src="/svg/workout.svg" alt="workout" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            unde. Impedit vitae harum quae quas exercitationem repudiandae
            suscipit provident cupiditate animi dicta accusantium, eum accusamus
            explicabo natus distinctio nobis quos.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target[0].values);
          }}
        >
          <h2>Add new sessions</h2>
          <label>
            <span>exercise</span>
            <select>
              <option>pull up</option>
              <option>burpee</option>
              <option>run</option>
            </select>
          </label>
          <label>
            <span>Duration</span>
            <input type="text" />
          </label>
          <label>
            <span>Time</span>
            <input type="time" />
          </label>
          <label>
            <span>Reps</span>
            <input type="text" />
          </label>
          <label>
            <span>Comments</span>
            <input type="text" />
          </label>
          <button type="submit">submit</button>
        </form>
        <div>
          <div className="">
            <div className="">
              <img src="/img/bike-1.jpg" alt="" className=" " loading="lazy" />
            </div>
            <form className="">
              <div className="">
                <h3 className="">Workout Trip</h3>
                <div className="">$1100.00</div>
                <div className="">Available Spots</div>
              </div>

              <div className="">
                <div className="">
                  <button className="" type="submit">
                    Check dates
                  </button>
                </div>
                <button className="" type="button" aria-label="Like">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                    className=""
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    />
                  </svg>
                </button>
              </div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                odit natus quo porro omnis aspernatur aut eum tenetur? Tenetur
                cupiditate architecto ipsam quaerat assumenda soluta, officia
                quidem atque odio laborum!
              </p>
            </form>
          </div>
        </div>
      </main>
      <div className="">
        <footer className="">
          <div className="">
            <div className="">
              <a href="#" target="_blank" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
                <span className="">WorkIt</span>
              </a>
            </div>
            <div className="">
              <div>
                <h3 className="">Resources</h3>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="nofollow" className="">
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="">Follow us</h3>
                <ul>
                  <li className="mb-4">
                    <a href="#" target="_blank" className="">
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className="">
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="">Legal</h3>
                <ul>
                  <li className="mb-4">
                    <a href="#" target="_blank" className="">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className="">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="" />
          <div className="">
            <span className="">
              © 2022{" "}
              <a href="#" target="_blank" className="">
                workit™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

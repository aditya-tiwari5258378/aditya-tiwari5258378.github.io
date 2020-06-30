import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="colorlib-heading animate-box">EDUCATION</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Undergraduation <span>2016-2020</span>
                        </h2>
                        <p>
                          Completed my B.Tech with major in Electronics and
                          Communication Engineering(ECE) from Jaypee University
                          of Information Technology(JUIT). My current CGPA is
                          7.4 including all the semesters.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="colorlib-heading">Projects</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-cycle" />
                  </span>
                  <div className="desc">
                    <h3>Automatic Accident Detection </h3>
                    <p>
                      Detects the accident between vehcile in real time and
                      informs to the Data centre.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-sudoku" />
                  </span>
                  <div className="desc">
                    <h3>
                      <a href="https://github.com/aditya-tiwari5258378/Solve_Sudoku">
                        Sudoku Solver
                      </a>
                    </h3>
                    <p>
                      Software based program to solve Sudoku of any Dimension.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-login" />
                  </span>
                  <div className="desc">
                    <h3>
                      <a href="https://github.com/aditya-tiwari5258378/GUI">
                        Login System
                      </a>
                    </h3>
                    <p>
                      Project deals with the implementation of getting the user
                      to Login into the system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="colorlib-heading animate-box">Skills</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Languages </h2>
                        <p>
                          {" "}
                          <Button
                            variant="contained"
                            style={{ background: "#008CBA" }}
                            size="medium"
                            color="primary"
                          >
                            C++
                          </Button>
                          &nbsp;
                          <Button
                            variant="contained"
                            size="medium"
                            color="secondary"
                          >
                            Java
                          </Button>
                          &nbsp;
                          <Button
                            variant="contained"
                            size="medium"
                            color="primary"
                          >
                            Python
                          </Button>
                          &nbsp;
                        </p>

                        {/* </div>
                      <div className="timeline-label"> */}
                        <h2>Database </h2>
                        <p>
                          {" "}
                          <Button
                            variant="contained"
                            size="medium"
                            color="secondary"
                          >
                            SQL
                          </Button>
                          &nbsp;
                        </p>
                        {/* </div>
                      <div className="timeline-label"> */}
                        <h2>Framework </h2>
                        <p>
                          {" "}
                          <Button
                            variant="contained"
                            size="medium"
                            color="secondary"
                          >
                            ReactJS
                          </Button>
                          &nbsp;
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="colorlib-heading animate-box">
                  Extra Curricular-Activities
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Omega Leo Club <span>President(2018-19)</span>
                        </h2>

                        <p>
                          Worked in an NGO and provided services for years.
                          Organised Blood Donation Camp and Taught Rural
                          students
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>IEEE</h2>
                        <p>
                          Member of IEEE Student branch for 2 years and lead a
                          project during that time and had volunteered in many
                          conferences like IEEE PDGC Conference and IEEE ISPCC
                          Conference.{" "}
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

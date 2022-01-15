<template>
  <div class="page-body">
    <div class="container-xl">
      <div class="row row-deck row-cards">
        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="subheader">Transfers Number</div>
                <div class="ms-auto lh-1">
                  <div class="dropdown">
                    <p
                      class="text-muted"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Last 30 days
                    </p>
                  </div>
                </div>
              </div>
              <div class="h1 mb-3">75</div>
              <div class="d-flex mb-2">
                <div>Transfers rate</div>
                <div class="ms-auto">
                  <span
                    class="text-green d-inline-flex align-items-center lh-1"
                  >
                    7%
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon ms-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="3 17 9 11 13 15 21 7" />
                      <polyline points="14 7 21 7 21 14" />
                    </svg>
                  </span>
                </div>
              </div>
              <div class="progress progress-sm">
                <div
                  class="progress-bar bg-blue"
                  style="width: 50%"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span class="visually-hidden">75% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="subheader">Income Balance</div>
                <div class="ms-auto lh-1">
                  <div class="dropdown">
                    <p
                      class="text-muted"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Last 30 days
                    </p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-baseline">
                <div class="h1 mb-0 me-2">$4,300</div>
                <div class="me-auto">
                  <span
                    class="text-green d-inline-flex align-items-center lh-1"
                  >
                    8%
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon ms-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="3 17 9 11 13 15 21 7" />
                      <polyline points="14 7 21 7 21 14" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div id="chart-revenue-bg" class="chart-sm"></div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="subheader">Total Balance</div>
                <div class="ms-auto lh-1">
                  <div class="dropdown">
                    <p
                      class="text-muted"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Last 30 days
                    </p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-baseline">
                <div class="h1 mb-3 me-2">$6,782</div>
                <div class="me-auto">
                  <span
                    class="text-yellow d-inline-flex align-items-center lh-1"
                  >
                    0%
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon ms-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </div>
              </div>
              <div id="chart-new-clients" class="chart-sm"></div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="subheader">Transfers</div>
                <div class="ms-auto lh-1">
                  <div class="dropdown">
                    <p
                      class="text-muted"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Last 30 days
                    </p>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-baseline">
                <div class="h1 mb-3 me-2">2,986</div>
                <div class="me-auto">
                  <span
                    class="text-green d-inline-flex align-items-center lh-1"
                  >
                    4%
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon ms-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="3 17 9 11 13 15 21 7" />
                      <polyline points="14 7 21 7 21 14" />
                    </svg>
                  </span>
                </div>
              </div>
              <div id="chart-active-users" class="chart-sm"></div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="row row-cards">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Last 1 Week Transfers</h3>
                  <div id="chart-mentions" class="chart-lg"></div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body p-2 text-center">
                  <div class="text-end text-green">
                    <span
                      class="text-green d-inline-flex align-items-center lh-1"
                    >
                      6%
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon ms-1"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="3 17 9 11 13 15 21 7" />
                        <polyline points="14 7 21 7 21 14" />
                      </svg>
                    </span>
                  </div>
                  <div class="h1 m-0">43</div>
                  <div class="text-muted mb-3">MAT</div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body p-2 text-center">
                  <div class="text-end text-red">
                    <span
                      class="text-red d-inline-flex align-items-center lh-1"
                    >
                      -2%
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon ms-1"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="3 7 9 13 13 9 21 17" />
                        <polyline points="21 10 21 17 14 17" />
                      </svg>
                    </span>
                  </div>
                  <div class="h1 m-0">95</div>
                  <div class="text-muted mb-3">SLP</div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body p-2 text-center">
                  <div class="text-end text-green">
                    <span
                      class="text-green d-inline-flex align-items-center lh-1"
                    >
                      9%
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon ms-1"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="3 17 9 11 13 15 21 7" />
                        <polyline points="14 7 21 7 21 14" />
                      </svg>
                    </span>
                  </div>
                  <div class="h1 m-0">7</div>
                  <div class="text-muted mb-3">GODZ</div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <p class="mb-3">
                    Top 3 Main Contracts: <strong>$5,000 </strong>of $15,000
                  </p>
                  <div class="progress progress-separated mb-3">
                    <div
                      class="progress-bar bg-primary"
                      role="progressbar"
                      style="width: 44%"
                    ></div>
                    <div
                      class="progress-bar bg-info"
                      role="progressbar"
                      style="width: 19%"
                    ></div>
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      style="width: 9%"
                    ></div>
                  </div>
                  <div class="row">
                    <div class="col-auto d-flex align-items-center pe-2">
                      <span class="legend me-2 bg-primary"></span>
                      <span>MAT</span>
                      <span
                        class="
                          d-none d-md-inline d-lg-none d-xxl-inline
                          ms-2
                          text-muted
                        "
                        >$2,5k</span
                      >
                    </div>
                    <div class="col-auto d-flex align-items-center px-2">
                      <span class="legend me-2 bg-info"></span>
                      <span>SLP</span>
                      <span
                        class="
                          d-none d-md-inline d-lg-none d-xxl-inline
                          ms-2
                          text-muted
                        "
                        >$1,5k</span
                      >
                    </div>
                    <div class="col-auto d-flex align-items-center px-2">
                      <span class="legend me-2 bg-success"></span>
                      <span>GODZ</span>
                      <span
                        class="
                          d-none d-md-inline d-lg-none d-xxl-inline
                          ms-2
                          text-muted
                        "
                        >$1k</span
                      >
                    </div>
                    <div class="col-auto d-flex align-items-center ps-2">
                      <span class="legend me-2"></span>
                      <span>Other</span>
                      <span
                        class="
                          d-none d-md-inline d-lg-none d-xxl-inline
                          ms-2
                          text-muted
                        "
                        >$10k</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header border-0">
              <div class="card-title">Week Balance</div>
            </div>
            <div class="position-relative">
              <div class="position-absolute top-0 left-0 px-3 mt-1 w-75">
                <div class="row g-2">
                  <div class="col-auto">
                    <div
                      id="sparkline-activity"
                      class="chart-sparkline chart-sparkline-square"
                    ></div>
                  </div>
                  <div class="col">
                    <div>Week Earning: $4,262.40</div>
                    <div class="text-muted">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-inline text-green"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="3 17 9 11 13 15 21 7" />
                        <polyline points="14 7 21 7 21 14" />
                      </svg>
                      +5% more than last week
                    </div>
                  </div>
                </div>
              </div>
              <div id="chart-development-activity"></div>
            </div>
            <div class="card-table table-responsive">
              <table class="table table-vcenter">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="w-1">
                      <span
                        class="avatar avatar-sm"
                        :style="`background-image: url(${require('../../static/avatars/000m.jpg')})`"
                      ></span>
                    </td>
                    <td class="td-truncate">
                      <div class="text-truncate">My Master War</div>
                    </td>
                    <td class="text-nowrap text-muted">$50.00</td>
                  </tr>
                  <tr>
                    <td class="w-1">
                      <span class="avatar avatar-sm">JL</span>
                    </td>
                    <td class="td-truncate">
                      <div class="text-truncate">
                        Change deprecated html tags to text decoration classes
                        (#29604)
                      </div>
                    </td>
                    <td class="text-nowrap text-muted">27 Nov 2019</td>
                  </tr>
                  <tr>
                    <td class="w-1">
                      <span
                        class="avatar avatar-sm"
                        :style="`background-image: url(${require('../../static/avatars/002m.jpg')})`"
                      ></span>
                    </td>
                    <td class="td-truncate">
                      <div class="text-truncate">
                        justify-content:between ⇒ justify-content:space-between
                        (#29734)
                      </div>
                    </td>
                    <td class="text-nowrap text-muted">26 Nov 2019</td>
                  </tr>
                  <tr>
                    <td class="w-1">
                      <span
                        class="avatar avatar-sm"
                        :style="`background-image: url(${require('../../static/avatars/003m.jpg')})`"
                      ></span>
                    </td>
                    <td class="td-truncate">
                      <div class="text-truncate">
                        Update change-version.js (#29736)
                      </div>
                    </td>
                    <td class="text-nowrap text-muted">26 Nov 2019</td>
                  </tr>
                  <tr>
                    <td class="w-1">
                      <span
                        class="avatar avatar-sm"
                        :style="`background-image: url(${require('../../static/avatars/000f.jpg')})`"
                      ></span>
                    </td>
                    <td class="td-truncate">
                      <div class="text-truncate">
                        Regenerate package-lock.json (#29730)
                      </div>
                    </td>
                    <td class="text-nowrap text-muted">25 Nov 2019</td>
                  </tr>
                  <tr>
                    <td class="w-1">
                      <span
                        class="avatar avatar-sm"
                        :style="`background-image: url(${require('../../static/avatars/001f.jpg')})`"
                      ></span>
                    </td>
                    <td class="td-truncate">
                      <div class="text-truncate">Some minor text tweaks</div>
                    </td>
                    <td class="text-nowrap text-muted">24 Nov 2019</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-8">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Your Token Listing</h3>
            </div>
            <div class="card-table table-responsive">
              <table class="table table-vcenter">
                <thead>
                  <tr>
                    <th>Token Name</th>
                    <th>Amount</th>

                    <th colspan="2">Bounce rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      My Master War
                      <a href="#" class="ms-1" aria-label="Open website">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"
                          />
                          <path
                            d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"
                          />
                        </svg>
                      </a>
                    </td>
                    <td class="text-muted">4,896</td>

                    <td class="text-muted">82.54%</td>
                    <td class="text-end w-1">
                      <div
                        id="sparkline-bounce-rate-1"
                        class="chart-sparkline chart-sparkline-sm"
                      ></div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      /special-promo.html
                      <a href="#" class="ms-1" aria-label="Open website">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"
                          />
                          <path
                            d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"
                          />
                        </svg>
                      </a>
                    </td>
                    <td class="text-muted">3,652</td>

                    <td class="text-muted">76.29%</td>
                    <td class="text-end w-1">
                      <div
                        id="sparkline-bounce-rate-2"
                        class="chart-sparkline chart-sparkline-sm"
                      ></div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      /news/1,new-ui-kit.html
                      <a href="#" class="ms-1" aria-label="Open website">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"
                          />
                          <path
                            d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"
                          />
                        </svg>
                      </a>
                    </td>
                    <td class="text-muted">3,256</td>

                    <td class="text-muted">72.65%</td>
                    <td class="text-end w-1">
                      <div
                        id="sparkline-bounce-rate-3"
                        class="chart-sparkline chart-sparkline-sm"
                      ></div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      /lorem-ipsum-dolor-sit-amet-very-long-url.html
                      <a href="#" class="ms-1" aria-label="Open website">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"
                          />
                          <path
                            d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"
                          />
                        </svg>
                      </a>
                    </td>
                    <td class="text-muted">986</td>

                    <td class="text-muted">44.89%</td>
                    <td class="text-end w-1">
                      <div
                        id="sparkline-bounce-rate-4"
                        class="chart-sparkline chart-sparkline-sm"
                      ></div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      /colors.html
                      <a href="#" class="ms-1" aria-label="Open website">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"
                          />
                          <path
                            d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"
                          />
                        </svg>
                      </a>
                    </td>
                    <td class="text-muted">912</td>

                    <td class="text-muted">41.12%</td>
                    <td class="text-end w-1">
                      <div
                        id="sparkline-bounce-rate-5"
                        class="chart-sparkline chart-sparkline-sm"
                      ></div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      /docs/index.html
                      <a href="#" class="ms-1" aria-label="Open website">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"
                          />
                          <path
                            d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"
                          />
                        </svg>
                      </a>
                    </td>
                    <td class="text-muted">855</td>

                    <td class="text-muted">32.65%</td>
                    <td class="text-end w-1">
                      <div
                        id="sparkline-bounce-rate-6"
                        class="chart-sparkline chart-sparkline-sm"
                      ></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <a
            href="https://github.com/sponsors/codecalm"
            class="card card-sponsor"
            target="_blank"
            rel="noopener"
            :style="`background-image: url(${require('../../static/sponsor-banner-homepage.svg')})`"
            aria-label="Sponsor Tabler!"
          >
            <div class="card-body"></div>
          </a>
        </div>
        <chartsLayout></chartsLayout>
      </div>
    </div>
  </div>
</template>

<script>
import chartsLayout from '@/components/charts/chartsLayout.vue'
export default {
  name: 'BodyLayout',
  components: {
    chartsLayout,
  },
}
</script>

<style>
</style>

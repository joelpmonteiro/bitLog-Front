<template>
  <div class="page-body">
    <div class="container-xl">
      <div class="row row-deck row-cards">
        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="subheader">Balanço Em BNB</div>
              </div>
              <div class="d-flex align-items-baseline">
                <div class="h1 mb-0 me-2">$ {{ tokenSupply.status }}</div>
                <div class="me-auto">
                  <span
                    class="text-green d-inline-flex align-items-center lh-1"
                  >
                    8%
                    <!-- Download SVG icon from http://tabler-icons.io/i/trending-up -->
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
            <!-- <div id="chart-revenue-bg" class="chart-sm"></div> -->
            <div class="chart-sm">
              <apexchart
                width="100%"
                height="100%"
                type="area"
                :options="options"
                :series="series"
              ></apexchart>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="subheader">Volume de Transações (1 semana)</div>
              </div>
              <div class="d-flex align-items-baseline">
                <div class="h1 mb-3 me-2">2.986</div>
                <div class="me-auto">
                  <span
                    class="text-green d-inline-flex align-items-center lh-1"
                  >
                    4%
                    <!-- Download SVG icon from http://tabler-icons.io/i/trending-up -->
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
              <!-- <div id="chart-active-users" class="chart-sm"></div> -->
              <div class="chart-sm">
                <apexchart
                  width="100%"
                  height="40"
                  type="bar"
                  :options="options2"
                  :series="series2"
                ></apexchart>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="subheader">Total De Transações</div>
              </div>
              <div class="h1 mb-3">589</div>
              <div class="d-flex mb-2">
                <div>Realizadas Nesta Semana</div>
                <div class="ms-auto">
                  <span
                    class="text-green d-inline-flex align-items-center lh-1"
                  >
                    7%
                  </span>
                </div>
              </div>
              <div class="progress progress-sm">
                <div
                  class="progress-bar bg-blue"
                  style="width: 7%"
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
                <div class="subheader">Total De Taxas</div>
              </div>
              <div class="h1 mb-3">$35,35</div>
              <div class="d-flex mb-2">
                <div>Média Semanal</div>
                <div class="ms-auto">
                  <span class="text-red d-inline-flex align-items-center lh-1">
                    45%
                    <!-- Download SVG icon from http://tabler-icons.io/i/trending-up -->
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
                  style="width: 72.5%"
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

        <div class="col-lg-6">
          <div class="card">
            <div class="card-header border-0">
              <div class="card-title">Transações Em R$</div>
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
                    <div>Transações Totais Desta Semana: $4,262.40</div>
                    <div class="text-muted">
                      <!-- Download SVG icon from http://tabler-icons.io/i/trending-up -->
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
                      +5% mais que na semana passada
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
                    <th>Tipo</th>
                    <th>Interação</th>
                    <th>Preço</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="w-1">
                      <span class="avatar avatar-sm" style="width: 120%"
                        >Transfer</span
                      >
                    </td>
                    <td class="w-5">
                      <span
                        class="avatar avatar-sm"
                        style="background-color: #ffcccc"
                        >OUT</span
                      >
                    </td>
                    <td class="td-truncate">
                      <div class="text-truncate">
                        0x7401a392375d056597fea9541fa6a94c784c9d19
                      </div>
                    </td>
                    <td class="text-nowrap text-muted">R$50,00</td>
                  </tr>

                  <tr>
                    <td class="w-1">
                      <span class="avatar avatar-sm" style="width: 120%"
                        >Swap</span
                      >
                    </td>
                    <td class="w-1">
                      <span
                        class="avatar avatar-sm"
                        style="background-color: #ddf0b2"
                        >IN</span
                      >
                    </td>
                    <td class="td-truncate">
                      <div class="text-truncate">PancakeSwap: Router v2</div>
                    </td>
                    <td class="text-nowrap text-muted">R$98,00</td>
                  </tr>

                  <tr>
                    <td class="w-1">
                      <span class="avatar avatar-sm" style="width: 120%"
                        >Swap</span
                      >
                    </td>
                    <td class="w-1">
                      <span
                        class="avatar avatar-sm"
                        style="background-color: #ddf0b2"
                        >IN</span
                      >
                    </td>
                    <td class="td-truncate">
                      <div class="text-truncate">PancakeSwap: Router v2</div>
                    </td>
                    <td class="text-nowrap text-muted">R$28,00</td>
                  </tr>

                  <tr>
                    <td class="w-1">
                      <span class="avatar avatar-sm" style="width: 120%"
                        >Transfer</span
                      >
                    </td>
                    <td class="w-5">
                      <span
                        class="avatar avatar-sm"
                        style="background-color: #ffcccc"
                        >OUT</span
                      >
                    </td>
                    <td class="td-truncate">
                      <div class="text-truncate">
                        0x7401a392375d056597fea9541fa6a94c784c9d19
                      </div>
                    </td>
                    <td class="text-nowrap text-muted">R$50,00</td>
                  </tr>

                  <tr>
                    <td class="w-1">
                      <span class="avatar avatar-sm" style="width: 120%"
                        >Transfer</span
                      >
                    </td>
                    <td class="w-5">
                      <span
                        class="avatar avatar-sm"
                        style="background-color: #ffcccc"
                        >OUT</span
                      >
                    </td>
                    <td class="td-truncate">
                      <div class="text-truncate">
                        0x7401a392375d056597fea9541fa6a94c784c9d19
                      </div>
                    </td>
                    <td class="text-nowrap text-muted">R$50,00</td>
                  </tr>

                  <tr>
                    <td class="w-1">
                      <span class="avatar avatar-sm" style="width: 120%"
                        >Transfer</span
                      >
                    </td>
                    <td class="w-5">
                      <span
                        class="avatar avatar-sm"
                        style="background-color: #ffcccc"
                        >OUT</span
                      >
                    </td>
                    <td class="td-truncate">
                      <div class="text-truncate">
                        0x7401a392375d056597fea9541fa6a94c784c9d19
                      </div>
                    </td>
                    <td class="text-nowrap text-muted">R$50,00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="row row-cards">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Quantidade De Transações</h3>
                  <!-- <div id="chart-mentions" class="chart-lg"></div> -->
                  <div class="chart-lg">
                    <apexchart
                      width="100%"
                      height="240"
                      type="bar"
                      :options="options3"
                      :series="series3"
                    ></apexchart>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <p class="mb-3">Tokens Mais Movimentadas</p>
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
                      <span>BNB</span>
                    </div>
                    <div class="col-auto d-flex align-items-center px-2">
                      <span class="legend me-2 bg-info"></span>
                      <span>USDC</span>
                    </div>
                    <div class="col-auto d-flex align-items-center px-2">
                      <span class="legend me-2 bg-success"></span>
                      <span>BTC</span>
                    </div>
                    <div class="col-auto d-flex align-items-center ps-2">
                      <span class="legend me-2"></span>
                      <span>Outras</span>
                    </div>
                  </div>
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
                      <!-- Download SVG icon from http://tabler-icons.io/i/trending-up -->
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
                  <div class="h1 m-0">50</div>
                  <div class="text-muted mb-3">BNB</div>
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
                      <!-- Download SVG icon from http://tabler-icons.io/i/trending-down -->
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
                  <div class="h1 m-0">30</div>
                  <div class="text-muted mb-3">USDC</div>
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
                      <!-- Download SVG icon from http://tabler-icons.io/i/trending-up -->
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
                  <div class="h1 m-0">15</div>
                  <div class="text-muted mb-3">BTC</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12 col-lg-8">
          <a
            href="https://github.com/sponsors/codecalm"
            class="card card-sponsor"
            target="_blank"
            rel="noopener"
            style="background-image: url(./static/sponsor-banner-homepage.svg)"
            aria-label="Sponsor Tabler!"
          >
            <div class="card-body"></div>
          </a>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Dias Com Maior Volume</h3>
            </div>
            <table class="table card-table table-vcenter">
              <thead>
                <tr>
                  <th>Dia</th>
                  <th colspan="2">Transações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Segunda-Feira</td>
                  <td>4.200</td>
                  <td class="w-50">
                    <div class="progress progress-xs">
                      <div
                        class="progress-bar bg-primary"
                        style="width: 80.4%"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Terça-Feira</td>
                  <td>3.550</td>
                  <td class="w-50">
                    <div class="progress progress-xs">
                      <div
                        class="progress-bar bg-primary"
                        style="width: 71%"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Quinta-Feira</td>
                  <td>1.798</td>
                  <td class="w-50">
                    <div class="progress progress-xs">
                      <div
                        class="progress-bar bg-primary"
                        style="width: 35.96%"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Domingo</td>
                  <td>1.245</td>
                  <td class="w-50">
                    <div class="progress progress-xs">
                      <div
                        class="progress-bar bg-primary"
                        style="width: 24.9%"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Sexta-Feira</td>
                  <td>986</td>
                  <td class="w-50">
                    <div class="progress progress-xs">
                      <div
                        class="progress-bar bg-primary"
                        style="width: 19.72%"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Quarta-Feira</td>
                  <td>854</td>
                  <td class="w-50">
                    <div class="progress progress-xs">
                      <div
                        class="progress-bar bg-primary"
                        style="width: 17.08%"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Sábado</td>
                  <td>650</td>
                  <td class="w-50">
                    <div class="progress progress-xs">
                      <div
                        class="progress-bar bg-primary"
                        style="width: 13%"
                      ></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Relatório Completo De Transações</h3>
            </div>
            <div class="card-body border-bottom py-3">
              <div class="d-flex">
                <div class="text-muted">
                  Mostrar
                  <div class="mx-2 d-inline-block">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      value="8"
                      size="3"
                      aria-label="Invoices count"
                    />
                  </div>
                  resultados
                </div>
                <div class="ms-auto text-muted">
                  Pesquisar:
                  <div class="ms-2 d-inline-block">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      aria-label="Search invoice"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <table
                class="table card-table table-vcenter text-nowrap datatable"
              >
                <thead>
                  <tr>
                    <th class="w-1">
                      <input
                        class="form-check-input m-0 align-middle"
                        type="checkbox"
                        aria-label="Select all invoices"
                      />
                    </th>
                    <th class="w-1">
                      No.
                      <!-- Download SVG icon from http://tabler-icons.io/i/chevron-up -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-sm text-dark icon-thick"
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
                        <polyline points="6 15 12 9 18 15" />
                      </svg>
                    </th>
                    <th>Hash</th>
                    <th>Carteira</th>
                    <th>Taxa</th>
                    <th>Data</th>
                    <th>Status</th>
                    <th>Quantidade</th>
                    <th>USD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        class="form-check-input m-0 align-middle"
                        type="checkbox"
                        aria-label="Select invoice"
                      />
                    </td>
                    <td><span class="text-muted">001401</span></td>
                    <td>
                      <a href="invoice.html" class="text-reset" tabindex="-1"
                        >0x2fcef828f...</a
                      >
                    </td>
                    <td>
                      <span class="flag flag-country-us"></span>
                      0x7746470733...
                    </td>
                    <td>0,002 BNB</td>
                    <td>15 Dez 2017</td>
                    <td>
                      <span class="badge bg-success me-1"></span> Aprovado
                    </td>
                    <td>0.9 BNB</td>
                    <td>$500</td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        class="form-check-input m-0 align-middle"
                        type="checkbox"
                        aria-label="Select invoice"
                      />
                    </td>
                    <td><span class="text-muted">001401</span></td>
                    <td>
                      <a href="invoice.html" class="text-reset" tabindex="-1"
                        >0x2fcef828f...</a
                      >
                    </td>
                    <td>
                      <span class="flag flag-country-us"></span>
                      0x7746470733...
                    </td>
                    <td>0,002 BNB</td>
                    <td>15 Dez 2017</td>
                    <td>
                      <span class="badge bg-success me-1"></span> Aprovado
                    </td>
                    <td>0.9 BNB</td>
                    <td>$500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer d-flex align-items-center">
              <p class="m-0 text-muted">
                Mostrando <span>1</span> a <span>2</span> de
                <span>2</span> resultados
              </p>
              <ul class="pagination m-0 ms-auto">
                <li class="page-item disabled">
                  <a
                    class="page-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    <!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
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
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                    ant
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    pro
                    <!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
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
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BodyLayoutFree',
  data() {
    return {
      options: {
        chart: {
          width: '100%',
          height: '100%',
          id: 'chart-revenue-bg',
          type: 'area',
          fontFamily: 'inherit',
          sparkline: {
            enabled: true,
          },
          animations: {
            enabled: false,
          },
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
      options2: {
        chart: {
          type: 'bar',
          fontFamily: 'inherit',
          height: 40.0,
          sparkline: {
            enabled: true,
          },
          animations: {
            enabled: false,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: '50%',
          },
        },
      },
      series2: [
        {
          name: 'series-1',
          data: [
            15, 10, 25, 20, 35, 25, 40, 50, 60, 76, 85, 90, 110, 80, 15, 10, 25,
            20, 35, 25, 40, 50, 60, 76, 85, 90, 110, 150,
          ],
        },
      ],

      options3: {
        chart: {
          id: 'chart-mentions',
          type: 'bar',
          fontFamily: 'inherit',
          height: 240,
          parentHeightOffset: 0,
          toolbar: {
            show: false,
          },
          animations: {
            enabled: false,
          },
          stacked: true,
        },
        plotOptions: {
          bar: {
            columnWidth: '50%',
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          opacity: 1,
        },
        grid: {
          padding: {
            top: -20,
            right: 0,
            left: -4,
            bottom: -4,
          },
          strokeDashArray: 4,
          xaxis: {
            lines: {
              show: true,
            },
          },
        },
        xaxis: {
          labels: {
            padding: 0,
          },
          tooltip: {
            enabled: false,
          },
          axisBorder: {
            show: false,
          },
          type: 'datetime',
        },
        yaxis: {
          labels: {
            padding: 4,
          },
        },
        labels: [
          '2020-06-20',
          '2020-06-21',
          '2020-06-22',
          '2020-06-23',
          '2020-06-24',
          '2020-06-25',
          '2020-06-26',
          '2020-06-27',
          '2020-06-28',
          '2020-06-29',
          '2020-06-30',
          '2020-07-01',
          '2020-07-02',
          '2020-07-03',
          '2020-07-04',
          '2020-07-05',
          '2020-07-06',
          '2020-07-07',
          '2020-07-08',
          '2020-07-09',
          '2020-07-10',
          '2020-07-11',
          '2020-07-12',
          '2020-07-13',
          '2020-07-14',
          '2020-07-15',
          '2020-07-16',
          '2020-07-17',
          '2020-07-18',
          '2020-07-19',
          '2020-07-20',
          '2020-07-21',
          '2020-07-22',
          '2020-07-23',
          '2020-07-24',
          '2020-07-25',
          '2020-07-26',
        ],
        colors: ['#206bc4', '#79a6dc', '#bfe399'],
        legend: {
          show: false,
        },
      },
      series3: [
        {
          name: 'Web',
          data: [
            1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 12, 5, 8, 22, 6, 8, 6, 4, 1, 8, 24,
            29, 51, 40, 47, 23, 26, 50, 26, 41, 22, 46, 47, 81, 46, 6,
          ],
        },
        {
          name: 'Social',
          data: [
            2, 5, 4, 3, 3, 1, 4, 7, 5, 1, 2, 5, 3, 2, 6, 7, 7, 1, 5, 5, 2, 12,
            4, 6, 18, 3, 5, 2, 13, 15, 20, 47, 18, 15, 11, 10, 0,
          ],
        },
        {
          name: 'Other',
          data: [
            2, 9, 1, 7, 8, 3, 6, 5, 5, 4, 6, 4, 1, 9, 3, 6, 7, 5, 2, 8, 4, 9, 1,
            2, 6, 7, 5, 1, 8, 3, 2, 3, 4, 9, 7, 1, 6,
          ],
        },
      ],
    }
  },
  computed: {
    ...mapGetters({ supply: `wallet/getSupply` }),
    tokenSupply() {
      return this.supply
    },
  },
}
</script>

<style>
</style>
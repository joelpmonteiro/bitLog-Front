<template>
  <div class="col-12">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Wallets</h3>

        <!-- <p >An error occurred :(</p> -->
      </div>
      <div class="card-body border-bottom py-3">
        <div class="d-flex">
          <div class="text-muted">
            Show
            <div class="mx-2 d-inline-block">
              <input
                v-model.lazy.number="limit"
                type="text"
                class="form-control form-control-sm"
                size="3"
                aria-label="Invoices count"
              />
            </div>
            entries
          </div>
          <div class="ms-auto text-muted">
            Search:
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

      <!-- <div v-if="$fetchState.pending" class="table-responsive">
        <p>Loading....</p>
      </div>
      <div v-else-if="$fetchState.error" class="table-responsive">
        <p>Error while fetching mountains</p>
      </div> -->

      <div class="table-responsive">
        <table class="table card-table table-vcenter text-nowrap datatable">
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
              <th>Wallet</th>
              <th>FEE</th>
              <th>Date</th>
              <th>Status</th>
              <th>AMOUNT</th>
              <th>USDC</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, index) in updatePage" :key="index">
              <td>
                <input
                  class="form-check-input m-0 align-middle"
                  type="checkbox"
                  aria-label="Select invoice"
                />
              </td>
              <td>
                <span class="text-muted">{{ value.transactionIndex }}</span>
              </td>
              <td>
                <a href="" class="text-reset" tabindex="-1">{{ value.hash }}</a>
              </td>
              <td>
                <div>
                  <a href="" data-bs-toggle="tooltip" :title="`${value.to}`">{{
                    value.nameWallet
                  }}</a>
                  <div class="tooltip bs-tooltip-top" role="tooltip">
                    <div class="tooltip-arrow"></div>
                    <div class="tooltip-inner">{{ value.to }}</div>
                  </div>
                </div>
              </td>
              <td>teste</td>
              <td>{{ value.timeStamp }}</td>
              <td><span class="badge bg-success me-1"></span> aaaaaaaaaaaaa</td>
              <td>$887</td>
              <td class="text-end">
                <span class="dropdown">
                  <button
                    class="btn dropdown-toggle align-text-top"
                    data-bs-boundary="viewport"
                    data-bs-toggle="dropdown"
                  >
                    Actions
                  </button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#"> Action </a>
                    <a class="dropdown-item" href="#"> Another action </a>
                  </div>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer d-flex align-items-center">
        <p class="m-0 text-muted">
          Showing <span>1</span> to <span>8</span> of <span>16</span> entries |
          <span
            >Para Carregar mais, clique no botão <strong>Mais?...</strong></span
          >
        </p>
        <ul v-if="totalItems > 0" class="pagination m-0 ms-auto">
          <!-- <li class="page-item" :class="{ disabled: current <= 1 }">
            <a
              class="page-link"
              href=""
              tabindex="-1"
              aria-disabled="true"
              @click.prevent="updatePage(prev)"
            >
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
              prev
            </a>
          </li> -->
          <li
            v-for="(pageVal, index) in pages"
            :key="index"
            class="page-item"
            :class="{ active: pageVal === current }"
          >
            <a
              class="page-link"
              href=""
              @click.prevent="updatePagePagination(pageVal)"
              >{{ pageVal }}</a
            >
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href=""
              @click.prevent="rechargeItems(contadorPage++)"
              >Mais...</a
            >
          </li>
          <!--<li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
          -->
          <!-- <li class="page-item">
            <a class="page-link" href="#">
              next
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
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */

import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'ChartsLayout',
  data: () => ({
    getWallets: [],
    msg: 'teste hello',
    page: 1,
    totalItems: 0,
    limit: 8,
    offset: 0,
    paginationWallet: [],
    contadorPage: 1,
    question: '',
  }),
  // async fetch() {
  //   try {
  //     // getWallets/tokentx/0xf3147987a00d35eecc10c731269003ca093740ca/0x7746470733738eBA82357A9E38ACFF69a21BE8A2`
  //     const { wallet } = await this.$axios.$get(
  //       `/getWallets/tokentx/${this.getWallet}/${this.page}`
  //     )
  //     this.getWallets.push(...wallet)
  //     this.totalItems = this.getWallets.length
  //     this.updatePagePagination(this.page)
  //   } catch (error) {
  //     console.log(error.response)
  //     // Codigo de error Para mostrar  Swal
  //     if (error.response !== undefined) {
  //       if (error.response.status === 404) {
  //         // alert(error.response.data.msg)
  //       }
  //       // if (error.response.status === 500) {
  //       //   alert(error.response.data.msg)
  //       // }
  //     } else {
  //       alert(`Erro interno no sistema`)
  //     }
  //   }
  // },

  computed: {
    ...mapGetters({ getWallet: 'wallet/getWallet' }),
    current() {
      return this.offset ? this.offset + 1 : 1
    },
    pages() {
      const qty = Math.ceil(this.totalItems / this.limit)
      console.log()
      console.log(qty)

      if (this.limit === '' || this.limit === 0)
        return Array.from(Array(1).keys(), (i) => i + 1)

      // const qty = Math.ceil(this.totalItems / this.limit)
      if (qty <= 1) return this.current
      return Array.from(Array(qty).keys(), (i) => i + 1)
      // // // console.log(qty)
      // return ``
    },
    listaWallet() {
      return this.paginationWallet
    },
    updatePage() {
      const start = (this.page - 1) * this.limit
      console.log(start)
      const end =
        this.page *
        (this.limit === 0 || this.limit === undefined || this.limit === ''
          ? this.totalItems
          : this.limit)
      console.log(end)
      return this.updatePageMetho(start, end)
    },
  },

  async mounted() {
    try {
      const walletToken = await this.$web3.eth.requestAccounts()

      if (walletToken[0]) {
        this.walletToken = walletToken[0]
        this.commitWallet({ wallet: walletToken[0] })
        const { wallet } = await this.$axios.$get(
          `/getWallets/tokentx/${walletToken[0]}/${this.page}`
        )

        this.getWallets.push(...wallet)
        this.totalItems = this.getWallets.length
        this.updatePagePagination(this.page)
      } else
        setTimeout(() => {
          alert(
            'Não Foi possivel prosseguir com ação por falta do id da sua carteira!'
          )
        }, 1200)
    } catch (error) {
      // Codigo de error Para mostrar  Swal
      if (error.response !== undefined) {
        if (error.response.status === 404) {
          alert(error.response.data.msg)
        }
        if (error.response.status === 500) {
          alert(error.response.data.msg)
        }
      } else {
        alert(`Erro interno no sistema`)
      }
    }
  },
  // activated() {
  //   // Call fetch again if last fetch more than 30 sec ago
  //   if (this.$fetchState.timestamp <= Date.now() - 30000) {
  //     this.$fetch()
  //   }
  // },
  methods: {
    ...mapMutations({ commitWallet: 'wallet/saveWallet' }),
    async rechargeItems() {
      try {
        const resp = await this.$axios.$get(
          `/getWallets/tokentx/0x7746470733738eBA82357A9E38ACFF69a21BE8A2/${this.contadorPage}`
        )
        console.log(resp)
        this.getWallets.push(...resp.wallet)
        this.totalItems = this.getWallets.length
      } catch (error) {
        console.log(error)
      }
    },
    updatePageMetho(start, end) {
      this.paginationWallet = this.getWallets.slice(start, end)
      this.offset = this.page - 1
      return this.paginationWallet
    },
    updatePagePagination(pageIndex) {
      const start = (pageIndex - 1) * this.limit
      const end = pageIndex * this.limit
      this.paginationWallet = this.getWallets.slice(start, end)
      this.page = pageIndex
      this.offset = pageIndex - 1
    },
  },
}
</script>

<style scoped>
.bs-tooltip-auto[data-popper-placement^='top'],
.bs-tooltip-top {
  margin-top: -5.6rem;
  margin-bottom: -5.6rem;
}
</style>

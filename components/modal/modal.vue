<template>
  <div
    id="modal-report"
    class="modal modal-blur fade"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">New Contact</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Name*</label>
            <input
              v-model.lazy="name"
              type="text"
              class="form-control"
              name="example-text-input"
              placeholder="Name Identifier"
            />
          </div>
          <label class="form-label">Account Type*</label>
          <div class="form-selectgroup-boxes row mb-3">
            <div class="col-lg-6">
              <label class="form-selectgroup-item">
                <input
                  v-model.lazy="typeWallet"
                  type="radio"
                  name="report-type"
                  value="1"
                  class="form-selectgroup-input"
                  checked
                />
                <span
                  class="form-selectgroup-label d-flex align-items-center p-3"
                >
                  <span class="me-3">
                    <span class="form-selectgroup-check"></span>
                  </span>
                  <span class="form-selectgroup-label-content">
                    <span class="form-selectgroup-title strong mb-1"
                      >Personal Wallet</span
                    >
                    <span class="d-block text-muted"
                      >A friend's personal wallet address for example.</span
                    >
                  </span>
                </span>
              </label>
            </div>
            <div class="col-lg-6">
              <label class="form-selectgroup-item">
                <input
                  v-model.lazy="typeWallet"
                  type="radio"
                  name="report-type"
                  value="2"
                  class="form-selectgroup-input"
                />
                <span
                  class="form-selectgroup-label d-flex align-items-center p-3"
                >
                  <span class="me-3">
                    <span class="form-selectgroup-check"></span>
                  </span>
                  <span class="form-selectgroup-label-content">
                    <span class="form-selectgroup-title strong mb-1"
                      >Contract Wallet</span
                    >
                    <span class="d-block text-muted"
                      >Contract address of a token for example.</span
                    >
                  </span>
                </span>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8">
              <div class="mb-3">
                <label class="form-label">Wallet Address*</label>
                <div class="input-group input-group-flat">
                  <input
                    v-model.lazy="wallet"
                    type="text"
                    class="form-control ps-0"
                    placeholder="  0x77...E8A2"
                    autocomplete="off"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mb-3">
                <label class="form-label">Visibility*</label>
                <select v-model.lazy.number="visibility" class="form-select">
                  <option value="1" selected>Public</option>
                  <option value="2">Private</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <a
            href="#"
            class="btn btn-link link-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </a>
          <a
            class="btn btn-primary ms-auto"
            data-bs-dismiss="modal"
            @click.prevent="addWallet"
          >
            <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
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
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add Contact
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { mapMutations } from 'vuex'
import { addWallet } from '../../services/axios'
export default {
  name: 'ModalContact',
  // props: {
  //   wallet: {
  //     type: String,
  //     required: true,
  //   },
  // },
  data() {
    return {
      walletToken: '',
      typeWallet: 1,
      name: '',
      contractWallet: '',
      visibility: 1,
    }
  },
  computed: {
    wallet: {
      get() {
        return this.typeWallet === '2' ? this.contractWallet : this.walletToken
      },
      set(v) {
        this.contractWallet = v
      },
    },
  },
  async mounted() {
    try {
      const wallet = await this.$web3.eth.requestAccounts()
      this.walletToken = wallet[0]
      this.commitWallet({ wallet: this.walletToken })
    } catch (error) {
      alert('já existe um processo aberto!')
    }
  },
  methods: {
    ...mapMutations({ commitWallet: 'wallet/saveWallet' }),
    async addWallet() {
      try {
        let walletResp = null
        if (this.typeWallet === 2) {
          walletResp = await addWallet(this.$axios, {
            name: this.name,
            addressWallet: this.contractWallet,
            typeAccount: this.typeWallet,
            visibility: this.visibility,
          })
        } else {
          walletResp = await addWallet(this.$axios, {
            name: this.name,
            addressWallet: this.walletToken,
            typeAccount: this.typeWallet,
            visibility: this.visibility,
          })
        }

        console.log(walletResp)
        if (walletResp.status === 200) alert(walletResp.data.msg)
      } catch (error) {
        console.log(error)
        if (error.response !== undefined) {
          if (error.response.status === 404) alert(error.response.data.msg)
          if (error.response.status === 500) alert(error.response.data.msg)
        } else alert('Error no Sistema!')
      }
    },
  },
}
</script>

<style></style>

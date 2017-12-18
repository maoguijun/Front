export const role_config = {
  "account_management": {
    "id": 1,
    "supplier_management": {
      "id": 11,
      "permissions": [
        {
          "id": "getlistsupplier",
          "description": "view list"
        },
        {
          "id": "getsupplier",
          "description": "view"
        },
        {
          "id": "newsupplier",
          "description": "new supplier"
        },
        {
          "id": "stopsupplier",
          "description": "stop the account"
        },
        {
          "id": "activesupplier",
          "description": "active/passed"
        },
        {
          "id": "checksupplier",
          "description": "check pending"
        },
        {
          "id": "changepasswordsupplier",
          "description": "change the password"
        },
        {
          "id": "disapprovesupplier",
          "description": "disapprove"
        },
        {
          "id": "updatesupplier",
          "description": "edit supplier"
        }
      ],
      "target": "supplier"
    },
    "craftsman_management": {
      "id": 12,
      "permissions": [
        {
          "id": "getlistcraftsman",
          "description": "view list"
        },
        {
          "id": "getcraftsman",
          "description": "view"
        },
        {
          "id": "newcraftsman",
          "description": "new craftsman"
        },
        {
          "id": "stopcraftsman",
          "description": "stop craftsman"
        },
        {
          "id": "activecraftsman",
          "description": "active/passed"
        },
        {
          "id": "checkcraftsman",
          "description": "check pending"
        },
        {
          "id": "changepasswordcraftsman",
          "description": "change the password"
        },
        {
          "id": "disapprovecraftsman",
          "description": "disapprove"
        },
        {
          "id": "updatecraftsman",
          "description": "edit craftsman"
        }
      ],
      "target": "craftsman"
    },
    "customer_management": {
      "id": 13,
      "permissions": [
        {
          "id": "getlistcustomer",
          "description": "view list"
        },
        {
          "id": "getcustomer",
          "description": "view"
        },
        {
          "id": "stopcustomer",
          "description": "stop customer"
        },
        {
          "id": "activecustomer",
          "description": "active customer"
        },
        {
          "id": "updatecustomer",
          "description": "edit customer"
        }
      ],
      "target": "customer"
    }
  },
  "order_management": {
    "id": 2,
    "permissions": [
      {
        "id": "cancelorder",
        "description": "cancel order"
      },
      {
        "id": "updateorder",
        "description": "edit order"
      },
      {
        "id": "getlistorder",
        "description": "view list"
      },
      {
        "id": "getorder",
        "description": "view"
      },
      {
        "id": "startorder",
        "description": "start order"
      },
      {
        "id": "endorder",
        "description": "end order"
      }
    ],
    "target": "order"
  },
  "message_management": {
    "id": 3,
    "feedback": {
      "id": 31,
      "permissions": [
        {
          "id": "getlistfeedback",
          "description": "view list"
        },
        {
          "id": "getfeedback",
          "description": "view"
        },
        {
          "id": "updatefeedback",
          "description": "update feedback"
        }
      ],
      "target": "feedback"
    },
    "mass_texting": {
      "id": 32,
      "permissions": [
        {
          "id": "newsjpush",
          "description": "a new mass texting"
        },
        {
          "id": "newjpush",
          "description": "send a meeage"
        },
        {
          "id": "getlistjpush",
          "description": "view list"
        },
        {
          "id": "getjpush",
          "description": "view"
        }
      ],
      "target": "jpush"
    }
  },
  "admin_management": {
    "id": 4,
    "permissions": [
      {
        "id": "newadmin",
        "description": "add new admin"
      },
      {
        "id": "stopadmin",
        "description": "stop admin"
      },
      {
        "id": "activeadmin",
        "description": "active admin"
      },
      {
        "id": "changepasswordadmin",
        "description": "change password"
      },
      {
        "id": "deleteadmin",
        "description": "delete account"
      },
      {
        "id": "updateadmin",
        "description": "update admin"
      },
      {
        "id": "getlistadmin",
        "description": "view list"
      },
      {
        "id": "getadmin",
        "description": "view"
      }
    ],
    "target": "admin"
  },
  "promotion_management": {
    "id": 5,
    "coupons_management": {
      "id": 51,
      "permissions": [
        {
          "id": "newvoucher",
          "description": "new coupons"
        },
        {
          "id": "publicvoucher",
          "description": "public coupons"
        },
        {
          "id": "updatevoucher",
          "description": "edit coupons"
        },
        {
          "id": "deletevoucher",
          "description": "delete coupons"
        },
        {
          "id": "getlistvoucher",
          "description": "view list"
        },
        {
          "id": "getvoucher",
          "description": "view"
        }
      ],
      "target": "voucher"
    }
  },
  "recommendation_management": {
    "id": 6,
    "permissions": [
      {
        "id": "getlistrecommendation",
        "description": "view list"
      },
      {
        "id": "getrecommendation",
        "description": "view"
      },
      {
        "id": "updaterecommendation",
        "description": "edit recommendation"
      },
      {
        "id": "newrecommendation",
        "description": "new recommendation"
      },
      {
        "id": "deleterecommendation",
        "description": "delete recommendation"
      }
    ],
    "target": "recommendation"
  },
  "financial_management": {
    "id": 7,
    "withdraw_management": {
      "id": 71,
      "permissions": [
        {
          "id": "completewithdraw",
          "description": "complete the transfer"
        },
        {
          "id": "refusewithdraw",
          "description": "refused"
        },
        {
          "id": "getlistwithdraw",
          "description": "view list"
        },
        {
          "id": "getwithdraw",
          "description": "view"
        }
      ],
      "target": "withdraw"
    },
    "customer_wallet_management": {
      "id": 72,
      "permissions": [
        {
          "id": "getlistcustomerwallet",
          "description": "view list"
        },
        {
          "id": "getcustomerwallet",
          "description": "view"
        },
        {
          "id": "activecustomerwallet",
          "description": "active"
        },
        {
          "id": "stopcustomerwallet",
          "description": "stop"
        },
        {
          "id": "updatecustomerwallet",
          "description": "edit customer wallet"
        }
      ],
      "target": "customerwallet"
    },
    "supplier_wallet_management": {
      "id": 73,
      "permissions": [
        {
          "id": "getlistsupplierwallet",
          "description": "view list"
        },
        {
          "id": "getsupplierwallet",
          "description": "view"
        },
        {
          "id": "activesupplierwallet",
          "description": "active"
        },
        {
          "id": "stopsupplierwallet",
          "description": "stop"
        },
        {
          "id": "updatesupplierwallet",
          "description": "edit supplier wallet"
        }
      ],
      "target": "supplierwallet"
    }
  },
  "product_management": {
    "id": 8,
    "permissions": [
      {
        "id": "getlistproduct",
        "description": "view list"
      },
      {
        "id": "getproduct",
        "description": "view"
      },
      {
        "id": "newproduct",
        "description": "new product"
      },
      {
        "id": "updateproduct",
        "description": "edit product"
      },
      {
        "id": "deleteproduct",
        "description": "delete product"
      },
      {
        "id": "stopproduct",
        "description": "stop product"
      },
      {
        "id": "activeproduct",
        "description": "active product"
      }
    ],
    "target": "product"
  },
  "role_management": {
    "id": 9,
    "permissions": [
      {
        "id": "getlistrole",
        "description": "view list"
      },
      {
        "id": "getrole",
        "description": "view"
      },
      {
        "id": "newrole",
        "description": "create role"
      },
      {
        "id": "updaterole",
        "description": "update role"
      },
      {
        "id": "deleterole",
        "description": "delete role"
      }
    ],
    "target": "role"
  }
}

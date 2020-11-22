Page({
  data: {
    tabs2: [
      {
        title: '全部',
        subTitle: '全部',
      },
      {
        title: '缴存',
        subTitle: '缴存',
      },
      {
        title: '提取',
        subTitle: '提取',
      },
    ],
    activeTab2: 0,
    list: [
      {
        title: '租房提取',
        isIn: false,
        source: '杭州市西湖区住房公积金管理中心',
        value: '30000.00',
        dateTime: '2019-04-15 12:14',
      }, {
        title: '公司汇缴-6月',
        isIn: true,
        source: '蚂蚁金服（杭州）网络技术有限公司',
        total: '27568.00',
        value: '5442.16',
        dateTime: '2019-06-15 12:14',
      }, {
        title: '公司汇缴-5月',
        isIn: true,
        source: '蚂蚁金服（杭州）网络技术有限公司',
        total: '22126.00',
        value: '5442.16',
        dateTime: '2019-05-15 12:14',
      }, {
        title: '租房提取',
        isIn: false,
        source: '杭州市西湖区住房公积金管理中心',
        value: '30000.00',
        dateTime: '2019-04-15 12:14',
      }, {
        title: '公司汇缴-4月',
        isIn: true,
        source: '蚂蚁金服（杭州）网络技术有限公司',
        total: '46684.00',
        value: '5442.16',
        dateTime: '2019-04-15 12:14',
      }, {
        title: '公司汇缴-3月',
        isIn: true,
        source: '蚂蚁金服（杭州）网络技术有限公司',
        total: '41242.00',
        value: '5442.16',
        dateTime: '2019-04-15 12:14',
      }, {
        title: '公司汇缴-2月',
        isIn: true,
        source: '蚂蚁金服（杭州）网络技术有限公司',
        total: '35800.00',
        value: '5442.16',
        dateTime: '2019-02-15 12:14',
      },
    ],
    filterList: []
  },
  onLoad() {
    this.setData({
      filterList: this.data.list
    })
  },
  handleTabClick({ index, tabsName }) {
    const { activeTab2, list } = this.data;
    // tab 切换了
    if (activeTab2 !== index) {
      switch (index) {
        case 0:
          this.setData({
            filterList: list
          })
          break;
        case 1:
          this.setData({
            filterList: list.filter(item => item.isIn)
          })
          break;
        case 2:
          this.setData({
            filterList: list.filter(item => !item.isIn)
          })
          break;
        default:
          this.setData({
            filterList: list
          })
          break;
      }
    }
    this.setData({
      [tabsName]: index,
    });
  },
  handleTabChange({ index, tabsName }) {
    const { list } = this.data;
    switch (index) {
      case 0:
        this.setData({
          filterList: list
        })
        break;
      case 1:
        this.setData({
          filterList: list.filter(item => item.isIn)
        })
        break;
      case 2:
        this.setData({
          filterList: list.filter(item => !item.isIn)
        })
        break;
      default:
        this.setData({
          filterList: list
        })
        break;
    }
    this.setData({
      [tabsName]: index,
    });
  },
});

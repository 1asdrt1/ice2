/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-31 22:34:13
 * @LastEditors: 李士林 lsl358915905@gmail.com
 * @LastEditTime: 2022-09-01 00:26:04
 * @FilePath: \ice1\src\pages\Dashboard\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import Guide from './components/Guide';

const { Cell } = ResponsiveGrid;

const Dashboard = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        首页1
      </Cell>
    </ResponsiveGrid>
  );
};

export default Dashboard;

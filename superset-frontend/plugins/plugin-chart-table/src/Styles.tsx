/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { css, styled } from '@superset-ui/core';

export default styled.div`
  ${({ theme }) => css`
    table {
      width: 100%;
      min-width: auto;
      max-width: none;
      margin: 0;
    }

    th,
    td {
      min-width: 4.3em;
    }

    thead > tr > th {
      padding-right: 0;
      position: relative;
      background: ${theme.colors.grayscale.light5};
      text-align: left;
    }
    th svg {
      color: ${theme.colors.grayscale.light2};
      margin: ${theme.gridUnit / 2}px;
    }
    th.is-sorted svg {
      color: ${theme.colors.grayscale.base};
    }
    .table > tbody > tr:first-of-type > td,
    .table > tbody > tr:first-of-type > th {
      border-top: 0;
    }

    .table > tbody tr td {
      font-feature-settings: 'tnum' 1;
    }

    .dt-controls {
      padding-bottom: 0.65em;
    }
    .dt-metric {
      text-align: right;
    }
    .dt-totals {
      font-weight: ${theme.typography.weights.bold};
    }
    .dt-is-null {
      color: ${theme.colors.grayscale.light1};
    }
    td.dt-is-filter {
      cursor: pointer;
    }
    td.dt-is-filter:hover {
      background-color: ${theme.colors.secondary.light4};
    }
    td.dt-is-active-filter,
    td.dt-is-active-filter:hover {
      background-color: ${theme.colors.secondary.light3};
    }

    .dt-global-filter {
      float: right;
    }

    .dt-truncate-cell {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .dt-truncate-cell:hover {
      overflow: visible;
      white-space: normal;
      height: auto;
    }

    /* Fix pagination container - center it and add proper spacing */
    .dt-pagination {
      text-align: center;
      padding: ${theme.gridUnit * 2}px 0;
      margin: ${theme.gridUnit}px 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .dt-pagination .pagination {
      margin: 0;
      display: inline-block;
      padding: 0;
    }

    /* Remove black outlines and match bottom pagination styling */
    .dt-pagination .pagination > li {
      display: inline;
      margin: 0 4px;
    }

    .dt-pagination .pagination > li > a,
    .dt-pagination .pagination > li > span {
      padding: 8px 12px;
      text-decoration: none;
      background-color: ${theme.colors.grayscale.light5};
      border-radius: ${theme.borderRadius}px;
      color: ${theme.colors.grayscale.dark1};
      border: none; /* Remove the black outline */
      display: inline-block;
      
      &:hover,
      &:focus {
        z-index: 2;
        color: ${theme.colors.grayscale.dark1};
        background-color: ${theme.colors.grayscale.light3};
        text-decoration: none;
      }
    }

    .dt-pagination .pagination > li.active > a,
    .dt-pagination .pagination > li.active > span {
      z-index: 3;
      color: ${theme.colors.grayscale.light5};
      cursor: default;
      background-color: ${theme.colors.primary.base};
      border: none; /* Remove border for active state */
      
      &:focus {
        outline: none;
      }
    }

    .dt-pagination .pagination > li.disabled > a,
    .dt-pagination .pagination > li.disabled > span {
      background-color: transparent;
      cursor: default;
      border: none;
      
      &:focus {
        outline: none;
      }
    }

    .pagination > li > span.dt-pagination-ellipsis {
      padding: 8px 12px;
      background-color: ${theme.colors.grayscale.light5};
      border-radius: ${theme.borderRadius}px;
      color: ${theme.colors.grayscale.base};
      border: none; /* Remove border */
      margin: 0 4px;
    }

    .pagination > li > span.dt-pagination-ellipsis:focus,
    .pagination > li > span.dt-pagination-ellipsis:hover {
      background: ${theme.colors.grayscale.light3};
      color: ${theme.colors.grayscale.dark1};
    }

    .dt-no-results {
      text-align: center;
      padding: 1em 0.6em;
    }

    .right-border-only {
      border-right: 2px solid ${theme.colors.grayscale.light2};
    }
    table .right-border-only:last-child {
      border-right: none;
    }
  `}
`;

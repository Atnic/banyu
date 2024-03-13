import React, {ChangeEvent, useMemo} from "react";
import {Meta} from "@storybook/react";
import {table} from "@jala-banyu/theme";
import {User} from "@jala-banyu/user";
import {Chip, ChipProps} from "@jala-banyu/chip";
import {Button} from "@jala-banyu/button";
import {Spinner} from "@jala-banyu/spinner";
import {Pagination} from "@jala-banyu/pagination";
import {Tooltip} from "@jala-banyu/tooltip";
import {EditIcon, DeleteIcon, EyeIcon} from "@jala-banyu/shared-icons";
import {useInfiniteScroll} from "@jala-banyu/use-infinite-scroll";
import {useAsyncList} from "@react-stately/data";
import useSWR from "swr";
import {Select, SelectItem} from "@jala-banyu/select";
import {Input} from "@jala-banyu/input";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableCell,
  TableRow,
  TableProps,
  getKeyValue,
} from "../src";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "success", "warning", "danger", "basic", "white", "transparent"],
    },
    headerColor: {
      control: {
        type: "select",
      },
      options: ["default", "white"],
    },
    layout: {
      control: {
        type: "select",
      },
      options: ["auto", "fixed"],
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
    shadow: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg"],
    },
    selectionMode: {
      control: {
        type: "select",
      },
      options: ["none", "single", "multiple"],
    },
    isStriped: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof Table>;

const defaultProps = {
  ...table.defaultVariants,
  className: "max-w-lg",
};

const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "status",
    label: "STATUS",
  },
];

type SWCharacter = {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
};

const StaticTemplate = (args: TableProps) => (
  <Table aria-label="Example static collection table" {...args}>
    <TableHeader>
      <TableColumn>NAME</TableColumn>
      <TableColumn>ROLE</TableColumn>
      <TableColumn>STATUS</TableColumn>
    </TableHeader>
    <TableBody>
      <TableRow key="1">
        <TableCell>Tony Reichert</TableCell>
        <TableCell>CEO</TableCell>
        <TableCell>Active</TableCell>
      </TableRow>
      <TableRow key="2">
        <TableCell>Zoey Lang</TableCell>
        <TableCell>Technical Lead</TableCell>
        <TableCell>Paused</TableCell>
      </TableRow>
      <TableRow key="3">
        <TableCell>Jane Fisher</TableCell>
        <TableCell>Senior Developer</TableCell>
        <TableCell>Active</TableCell>
      </TableRow>
      <TableRow key="4">
        <TableCell>William Howard</TableCell>
        <TableCell>Community Manager</TableCell>
        <TableCell>Vacation</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

const EmptyTemplate = (args: TableProps) => {
  const emptyContent = (
    <div className="flex flex-col items-center justify-center space-y-4">
      <p className="text-lg text-default-400">No data available</p>
      <Button>Add new item</Button>
    </div>
  );

  return (
    <Table aria-label="Example empty table" {...args}>
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody emptyContent={emptyContent}>{[]}</TableBody>
    </Table>
  );
};

const DynamicTemplate = (args: TableProps) => (
  <Table aria-label="Example table with dynamic content" {...args}>
    <TableHeader columns={columns}>
      {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
    </TableHeader>
    <TableBody items={rows}>
      {(item) => (
        <TableRow key={item.key}>
          {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
        </TableRow>
      )}
    </TableBody>
  </Table>
);

const CustomCellTemplate = (args: TableProps) => {
  const columns = [
    {name: "NAME", uid: "name"},
    {name: "ROLE", uid: "role"},
    {name: "STATUS", uid: "status"},
    {name: "ACTIONS", uid: "actions"},
  ];
  const users = [
    {
      id: 1,
      name: "Tony Reichert",
      role: "CEO",
      team: "Management",
      status: "active",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "tony.reichert@example.com",
    },
    {
      id: 2,
      name: "Zoey Lang",
      role: "Technical Lead",
      team: "Development",
      status: "paused",
      age: "25",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      email: "zoey.lang@example.com",
    },
    {
      id: 3,
      name: "Jane Fisher",
      role: "Senior Developer",
      team: "Development",
      status: "active",
      age: "22",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      email: "jane.fisher@example.com",
    },
    {
      id: 4,
      name: "William Howard",
      role: "Community Manager",
      team: "Marketing",
      status: "vacation",
      age: "28",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      email: "william.howard@example.com",
    },
    {
      id: 5,
      name: "Kristen Copper",
      role: "Sales Manager",
      team: "Sales",
      status: "active",
      age: "24",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      email: "kristen.cooper@example.com",
    },
  ];

  type User = (typeof users)[number];

  const statusColorMap: Record<string, ChipProps["color"]> = {
    active: "success",
    paused: "danger",
    vacation: "warning",
  };

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{radius: "lg", src: user.avatar}}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="soft">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells" {...args}>
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {users.map((item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        ))}
        <TableRow key={users.length + 1}>
          <TableCell>
            <Input placeholder={"Name"} />
          </TableCell>
          <TableCell>
            <Select placeholder={"Select Role"} selectionMode={"single"}>
              <SelectItem key={"CEO"} value={"CEO"}>
                CEO
              </SelectItem>
              <SelectItem key={"Technical Lead"} value={"Technical Lead"}>
                Technical Lead
              </SelectItem>
              <SelectItem key={"Senior Developer"} value={"Senior Developer"}>
                Senior Developer
              </SelectItem>
              <SelectItem key={"Community Manager"} value={"Community Manager"}>
                Community Manager
              </SelectItem>
              <SelectItem key={"Sales Manager"} value={"Sales Manager"}>
                Sales Manager
              </SelectItem>
            </Select>
          </TableCell>
          <TableCell>
            <Select classNames={{base: "min-w-32"}} placeholder={"Select Status"}>
              <SelectItem key={"Active"} value={"Active"}>
                Active
              </SelectItem>
              <SelectItem key={"Paused"} value={"Paused"}>
                Paused
              </SelectItem>
              <SelectItem key={"Vacation"} value={"Vacation"}>
                Vacation
              </SelectItem>
            </Select>
          </TableCell>
          <TableCell />
        </TableRow>
      </TableBody>
    </Table>
  );
};

const PaginatedTemplate = (args: TableProps) => {
  const [page, setPage] = React.useState(1);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(e.target.value));
  };

  const paginatedRows = [
    ...rows,
    {
      key: "5",
      name: "Emily Collins",
      role: "Marketing Manager",
      status: "Active",
    },
    {
      key: "6",
      name: "Brian Kim",
      role: "Product Manager",
      status: "Active",
    },
    {
      key: "7",
      name: "Laura Thompson",
      role: "UX Designer",
      status: "Active",
    },
    {
      key: "8",
      name: "Michael Stevens",
      role: "Data Analyst",
      status: "Paused",
    },
    {
      key: "9",
      name: "Sophia Nguyen",
      role: "Quality Assurance",
      status: "Active",
    },
    {
      key: "10",
      name: "James Wilson",
      role: "Front-end Developer",
      status: "Vacation",
    },
    {
      key: "11",
      name: "Ava Johnson",
      role: "Back-end Developer",
      status: "Active",
    },
    {
      key: "12",
      name: "Isabella Smith",
      role: "Graphic Designer",
      status: "Active",
    },
    {
      key: "13",
      name: "Oliver Brown",
      role: "Content Writer",
      status: "Paused",
    },
    {
      key: "14",
      name: "Lucas Jones",
      role: "Project Manager",
      status: "Active",
    },
    {
      key: "15",
      name: "Grace Davis",
      role: "HR Manager",
      status: "Active",
    },
    {
      key: "16",
      name: "Elijah Garcia",
      role: "Network Administrator",
      status: "Active",
    },
    {
      key: "17",
      name: "Emma Martinez",
      role: "Accountant",
      status: "Vacation",
    },
    {
      key: "18",
      name: "Benjamin Lee",
      role: "Operations Manager",
      status: "Active",
    },
    {
      key: "19",
      name: "Mia Hernandez",
      role: "Sales Manager",
      status: "Paused",
    },
    {
      key: "20",
      name: "Daniel Lewis",
      role: "DevOps Engineer",
      status: "Active",
    },
    {
      key: "21",
      name: "Amelia Clark",
      role: "Social Media Specialist",
      status: "Active",
    },
    {
      key: "22",
      name: "Jackson Walker",
      role: "Customer Support",
      status: "Active",
    },
    {
      key: "23",
      name: "Henry Hall",
      role: "Security Analyst",
      status: "Active",
    },
    {
      key: "24",
      name: "Charlotte Young",
      role: "PR Specialist",
      status: "Paused",
    },
    {
      key: "25",
      name: "Liam King",
      role: "Mobile App Developer",
      status: "Active",
    },
  ];

  const pages = Math.ceil(paginatedRows.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return paginatedRows.slice(start, end);
  }, [page, paginatedRows]);

  return (
    <div className={"flex flex-col gap-2"}>
      <Table aria-label="Example table with client side pagination" {...args}>
        <TableHeader>
          <TableColumn key="name">NAME</TableColumn>
          <TableColumn key="role">ROLE</TableColumn>
          <TableColumn key="status">STATUS</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.name}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex flex-col md:flex-row gap-2 w-full justify-between">
        <Pagination page={page} total={pages} onChange={(page) => setPage(page)} />
        <div className="flex gap-2 items-center justify-start">
          <Select
            classNames={{
              label: "font-normal group-data-[filled=true]:font-normal",
            }}
            defaultSelectedKeys={rowsPerPage.toString()}
            label="Show"
            labelPlacement="outside-left"
            selectionMode={"single"}
            variant="ghost"
            onChange={handleSelectChange}
          >
            <SelectItem key={5} value={5}>
              5
            </SelectItem>
            <SelectItem key={10} value={10}>
              10
            </SelectItem>
            <SelectItem key={20} value={20}>
              20
            </SelectItem>
          </Select>
          <span className="text-sm">Items</span>
        </div>
      </div>
    </div>
  );
};

const SortableTemplate = (args: TableProps) => {
  let list = useAsyncList<SWCharacter>({
    async load({signal}) {
      let res = await fetch(`https://swapi.py4e.com/api/people/?search`, {
        signal,
      });
      let json = await res.json();

      return {
        items: json.results,
      };
    },
    async sort({items, sortDescriptor}) {
      return {
        items: items.sort((a: any, b: any) => {
          let first = a[sortDescriptor.column!];
          let second = b[sortDescriptor.column!];
          let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
  });

  return (
    <Table
      aria-label="Example table with client side sorting"
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
      {...args}
    >
      <TableHeader>
        <TableColumn key="name" allowsSorting tooltip={"Name Column"}>
          Name
        </TableColumn>
        <TableColumn key="height" allowsSorting>
          Height
        </TableColumn>
        <TableColumn key="mass" allowsSorting>
          Mass
        </TableColumn>
        <TableColumn key="birth_year" allowsSorting>
          Birth year
        </TableColumn>
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

const LoadMoreTemplate = (args: TableProps) => {
  const [page, setPage] = React.useState(1);

  let list = useAsyncList<SWCharacter>({
    async load({signal, cursor}) {
      if (cursor) {
        setPage((prev) => prev + 1);
      }

      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      const res = await fetch(cursor || "https://swapi.py4e.com/api/people/?search=", {signal});
      let json = await res.json();

      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });

  const hasMore = page < 9;

  return (
    <div className={"flex flex-col gap-2"}>
      <Table aria-label="Example table with client side sorting" {...args}>
        <TableHeader>
          <TableColumn key="name">Name</TableColumn>
          <TableColumn key="height">Height</TableColumn>
          <TableColumn key="mass">Mass</TableColumn>
          <TableColumn key="birth_year">Birth year</TableColumn>
        </TableHeader>
        <TableBody items={list.items}>
          {(item) => (
            <TableRow key={item.name}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {hasMore ? (
        <div className="flex w-full justify-center items-center">
          <Button
            isDisabled={list.isLoading}
            startContent={list.isLoading && <Spinner color="white" size="sm" />}
            variant="outline"
            onPress={list.loadMore}
          >
            Load More
          </Button>
        </div>
      ) : null}
    </div>
  );
};

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());

const AsyncPaginatedTemplate = (args: TableProps) => {
  const [page, setPage] = React.useState(1);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(e.target.value));
  };

  const {data, isLoading} = useSWR<{
    count: number;
    results: SWCharacter[];
  }>(`https://swapi.py4e.com/api/people?page=${page}`, fetcher, {
    keepPreviousData: true,
  });

  const pages = useMemo(() => {
    return data?.count ? Math.ceil(data?.count / rowsPerPage) : 0;
  }, [data?.count, rowsPerPage]);

  const loadingState = isLoading || data?.results.length === 0 ? "loading" : "idle";

  const pagination = (
    <div className="flex flex-col md:flex-row gap-2 w-full justify-between">
      <Pagination page={page} total={pages} onChange={(page) => setPage(page)} />
      <div className="flex gap-2 items-center">
        <Select
          classNames={{
            label: "font-normal group-data-[filled=true]:font-normal",
          }}
          defaultSelectedKeys={["10"]}
          label="Show"
          labelPlacement="outside-left"
          selectionMode={"single"}
          variant="ghost"
          onChange={handleSelectChange}
        >
          <SelectItem key={10} value={10}>
            10
          </SelectItem>
          <SelectItem key={20} value={20}>
            20
          </SelectItem>
          <SelectItem key={50} value={50}>
            50
          </SelectItem>
        </Select>
        <span className="text-sm">Items</span>
      </div>
    </div>
  );

  return (
    <div className={"flex flex-col gap-2"}>
      <Table aria-label="Example table with client async pagination" {...args}>
        <TableHeader>
          <TableColumn key="name">Name</TableColumn>
          <TableColumn key="height">Height</TableColumn>
          <TableColumn key="mass">Mass</TableColumn>
          <TableColumn key="birth_year">Birth year</TableColumn>
        </TableHeader>
        <TableBody
          items={data?.results ?? []}
          loadingContent={<Spinner />}
          loadingState={loadingState}
        >
          {(item) => (
            <TableRow key={item?.name}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {pages > 0 && pagination}
    </div>
  );
};

const InfinitePaginationTemplate = (args: TableProps) => {
  const [hasMore, setHasMore] = React.useState(false);

  let list = useAsyncList<SWCharacter>({
    async load({signal, cursor}) {
      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      const res = await fetch(cursor || "https://swapi.py4e.com/api/people/?search=", {signal});
      let json = await res.json();

      setHasMore(json.next !== null);

      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });

  const [loaderRef, scrollerRef] = useInfiniteScroll({hasMore, onLoadMore: list.loadMore});

  return (
    <Table
      aria-label="Example table with client side sorting"
      baseRef={scrollerRef}
      bottomContent={
        hasMore ? (
          <div className="flex w-full justify-center">
            <Spinner ref={loaderRef} color="white" />
          </div>
        ) : null
      }
      {...args}
    >
      <TableHeader>
        <TableColumn key="name">Name</TableColumn>
        <TableColumn key="height">Height</TableColumn>
        <TableColumn key="mass">Mass</TableColumn>
        <TableColumn key="birth_year">Birth year</TableColumn>
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export const Default = {
  render: StaticTemplate,

  args: {
    ...defaultProps,
  },
};

export const Dynamic = {
  render: DynamicTemplate,

  args: {
    ...defaultProps,
  },
};

export const EmptyState = {
  render: EmptyTemplate,

  args: {
    ...defaultProps,
  },
};

export const NoHeader = {
  render: StaticTemplate,

  args: {
    ...defaultProps,
    hideHeader: true,
  },
};

export const CustomCells = {
  render: CustomCellTemplate,

  args: {
    ...defaultProps,
    className: "max-w-3xl",
  },
};

export const Striped = {
  render: StaticTemplate,

  args: {
    ...defaultProps,
    isStriped: true,
  },
};

export const RemoveWrapper = {
  render: StaticTemplate,

  args: {
    ...defaultProps,
    classNames: {
      table: "max-w-lg",
    },
    removeWrapper: true,
  },
};

export const SingleSelection = {
  render: StaticTemplate,

  args: {
    ...defaultProps,
    selectionMode: "single",
  },
};

export const MultipleSelection = {
  render: StaticTemplate,

  args: {
    ...defaultProps,
    selectionMode: "multiple",
    color: "primary",
  },
};

export const DisabledKeys = {
  render: StaticTemplate,

  args: {
    ...defaultProps,
    selectionMode: "multiple",
    disabledKeys: ["2"],
    color: "warning",
  },
};

export const DisallowEmptySelection = {
  render: StaticTemplate,

  args: {
    ...defaultProps,
    disallowEmptySelection: true,
    color: "primary",
    defaultSelectedKeys: ["2"],
    selectionMode: "multiple",
  },
};

export const Sortable = {
  render: SortableTemplate,

  args: {
    ...defaultProps,
  },
};

export const LoadMore = {
  render: LoadMoreTemplate,

  args: {
    ...defaultProps,
    className: "max-h-auto",
  },
};

export const Paginated = {
  render: PaginatedTemplate,

  args: {
    ...defaultProps,
    className: "min-h-[292px]",
  },
};

export const AsyncPaginated = {
  render: AsyncPaginatedTemplate,

  args: {
    ...defaultProps,
    className: "max-h-auto min-h-[400px]",
  },
};

export const InfinityPagination = {
  render: InfinitePaginationTemplate,

  args: {
    ...defaultProps,
    className: "max-w-3xl max-h-[440px] min-h-[400px] overflow-auto",
  },
};

export const HeaderSticky = {
  render: InfinitePaginationTemplate,

  args: {
    ...defaultProps,
    layout: "fixed",
    isHeaderSticky: true,
    className: "max-w-3xl max-h-[440px] min-h-[400px] overflow-auto",
  },
};

export const DisableAnimation = {
  render: StaticTemplate,

  args: {
    ...defaultProps,
    selectionMode: "multiple",
    color: "primary",
    disableAnimation: true,
  },
};

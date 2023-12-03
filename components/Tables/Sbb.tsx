import Image from "next/image";


interface User {
  id: number;
  Name: string;
  Dept: string;
  Post: string;
  joinedAt: string;
  created_at: string;
  updated_at: string;
  achievements: any[];
  xps: number;
  m: number;
}

interface AggregatedDept {
  Dept: string;
  totalXps: number;
  totalM: number;
}

function aggregateUsersByDept(users: User[]): AggregatedDept[] {
  const aggregatedDepts: Record<string, AggregatedDept> = {};

  users.forEach((user: User) => {
    const { Dept, xps, m } = user;

    if (aggregatedDepts[Dept]) {
      aggregatedDepts[Dept].totalXps += xps;
      aggregatedDepts[Dept].totalM += m;
    } else {
      aggregatedDepts[Dept] = {
        Dept,
        totalXps: xps,
        totalM: m,
      };
    }
  });

  const result: AggregatedDept[] = Object.values(aggregatedDepts);

  // Sort the result array by department names
  result.sort((a, b) => b.totalXps - a.totalXps);

  return result;
}




const Sbb = () => {
  console.log(aggregateUsersByDept(users))
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Department Name</p>
        </div>
        <div className="col-span-3 hidden items-center sm:flex">
          <p className="font-medium">Total Monthly XP</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Total XP</p>
        </div>
      </div>

      {aggregateUsersByDept(users).map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
                {   

                key === 0 && (
                  
                        <Image
                        src={"/images/1.png"}
                        width={60}
                        height={50}
                        alt="Product"
                        />
                        )
                      }
                      </div>
              <p className="text-sm text-black dark:text-white">
                {product.Dept}
              </p>
            </div>
          </div>
          <div className="col-span-3 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.totalM}
            </p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product.totalXps}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const users : User[] = [
  {
      "id": 1,
      "Name": "Mohamed amine dridi",
      "Dept": "Marketing",
      "Post": "employee",
      "joinedAt": "10/10/2023",
      "created_at": "2023-12-03T00:00:00.000000Z",
      "updated_at": "2023-12-03T00:00:00.000000Z",
      "achievements": [],
      "xps": 3520,
      "m" : 200
  },
  {
      "id": 2,
      "Name": "Amira Toukabri",
      "Dept": "sponsoring",
      "Post": "employee",
      "joinedAt": "10/10/2023",
      "created_at": "2023-12-03T00:00:00.000000Z",
      "updated_at": "2023-12-03T00:00:00.000000Z",
      "achievements": [],
      "xps": 2536,
      "m" : 230
  },
  {
      "id": 3,
      "Name": "Firas Zakraoui",
      "Dept": "sponsoring",
      "Post": "employee",
      "joinedAt": "10/10/2023",
      "created_at": "2023-12-03T00:00:00.000000Z",
      "updated_at": "2023-12-03T00:00:00.000000Z",
      "achievements": [],
      "xps": 1856,
      "m":100
  },
  {
      "id": 4,
      "Name": "Salwa Khammesi",
      "Dept": "Finance",
      "Post": "employee",
      "joinedAt": "10/10/2023",
      "created_at": "2023-12-03T00:00:00.000000Z",
      "updated_at": "2023-12-03T00:00:00.000000Z",
      "achievements": [],
      "xps": 1230,
      "m" : 105
  },
  {
      "id": 5,
      "Name": "Mahdi Said",
      "Dept": "Finance",
      "Post": "employee",
      "joinedAt": "10/10/2023",
      "created_at": "2023-12-03T00:00:00.000000Z",
      "updated_at": "2023-12-03T00:00:00.000000Z",
      "achievements": [],
      "xps": 850,
      "m":80
  }
]

export default Sbb;

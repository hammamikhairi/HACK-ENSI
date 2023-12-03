import Image from "next/image";


const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Department</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Post</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Monthly XP</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Total XP</p>
        </div>
      </div>

      {users.map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
<div className="h-12.5 w-15 rounded-md">
                {   

                product.id < 4 && (
                  
                        <Image
                        src={"/images/"  + product.id + ".png"}
                        width={60}
                        height={50}
                        alt="Product"
                        />
                        )
                      }
                      </div>
              <p className="text-sm text-black dark:text-white">
                {product.Name}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.Dept}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              ${product.Post}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{product.m}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">{product.xps}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwo;


const users = [
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
      "Dept": "Sponsoring",
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
      "Dept": "Sponsoring",
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

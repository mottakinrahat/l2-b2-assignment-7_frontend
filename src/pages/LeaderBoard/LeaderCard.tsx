import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import { Coins, MapPin } from "lucide-react";

const { Meta } = Card;

const LeaderCard = ({ donor }: { donor: any }) => {
  const { name, location, image, donationPrice, position } = donor;
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={image} />}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta title={name} />
        <h1 className="mt-1">{position}</h1>
        <div className="flex  items-center gap-2 mt-1">
          <MapPin className="w-4" />
          <h1>{location}</h1>
        </div>
        <div className="flex  items-center gap-2 mt-1">
          <Coins className="w-4" />
          <h1>
            <span className="font-semibold">amount:</span>$ {donationPrice}
          </h1>
        </div>
      </Card>
    </div>
  );
};

export default LeaderCard;

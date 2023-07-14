import { useRef, useState } from 'react';
import Button from '../../../components/Button';
import { Input } from '../../../components/Input';
import { CreateCouponContainer, NextButtonWrapper } from './CreateCoupon.style';
import RadioInputs from './RadioInputs';
import { useNavigate } from 'react-router-dom';
import { Spacing, Title, SectionTitle, Text } from '../../../style/layout/common';

const ParagraphSpacing = () => <Spacing $size={8} />;

const SectionSpacing = () => <Spacing $size={40} />;

const CreateCoupon = () => {
  // TODO: defined type
  const [createdType, setCreatedType] = useState('');
  const rewardInputRef = useRef<HTMLInputElement>(null);
  const expireSelectedRef = useRef<HTMLInputElement>(null);
  const stampCountRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <CreateCouponContainer>
      <Title>쿠폰 제작 및 변경</Title>
      <SectionSpacing />
      <SectionTitle>어떻게 제작하시겠어요?</SectionTitle>
      <ParagraphSpacing />
      <RadioInputs setValue={setCreatedType} />
      <SectionSpacing />
      <SectionTitle>목표 스탬프 갯수</SectionTitle>
      <ParagraphSpacing />
      <Text>리워드를 지급할 스탬프 갯수를 작성해주세요.</Text>
      {/* TODO: placeholder가 적용되지 않는 오류가 있음. */}
      <Input
        id="create-coupon-reward-input"
        label="리워드 명"
        type="text"
        placeholder="어떤 상품의 리워드를 전달할지 작성해주세요. ex) 아메리카노"
        required={true}
        width={400}
        ref={rewardInputRef}
      />
      <SectionSpacing />
      <SectionTitle>쿠폰 유효기간</SectionTitle>
      <ParagraphSpacing />
      <Text>
        고객이 가지게 될 쿠폰의 유효기간입니다. 유효기간이 지나면 해당 쿠폰의 스탬프가 모두
        소멸됩니다.
      </Text>
      <SectionSpacing />
      <NextButtonWrapper>
        <Button
          variant="secondary"
          size="medium"
          onClick={() => navigate('/admin/create-coupon/2')}
        >
          다음으로
        </Button>
      </NextButtonWrapper>
    </CreateCouponContainer>
  );
};

export default CreateCoupon;
